import { useTranslation } from "react-i18next";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { filterFunctions } from "./newFilterFn";
import { getSearchFields } from "./searchFields";
import { InboxGeneral } from "../../services/elements/InboxService";

const inboxConfig = (tenantId, filters) => ({

});

const callMiddlewares = async (data, middlewares) => {
  let applyBreak = false;
  let itr = -1;
  let _break = () => (applyBreak = true);
  let _next = async (data) => {
    if (!applyBreak && ++itr < middlewares.length) {
      let key = Object.keys(middlewares[itr])[0];
      let nextMiddleware = middlewares[itr][key];
      let isAsync = nextMiddleware.constructor.name === "AsyncFunction";
      if (isAsync) return await nextMiddleware(data, _break, _next);
      else return nextMiddleware(data, _break, _next);
    } else return data;
  };
  let ret = await _next(data);
  return ret || [];
};

const useNewInboxGeneral = ({ tenantId, ModuleCode, filters, middleware = [], config = {} }) => {
  const client = useQueryClient();
  const { t } = useTranslation();
  const { fetchFilters, searchResponseKey, businessIdAliasForSearch, businessIdsParamForSearch } = inboxConfig()[ModuleCode];
  let { workflowFilters, searchFilters, limit, offset, sortBy, sortOrder } = fetchFilters(filters);

  const query = useQuery({
    queryKey: ["INBOX", workflowFilters, searchFilters, ModuleCode, limit, offset, sortBy, sortOrder],
    queryFn: () =>
      InboxGeneral.Search({
        inbox: {
          tenantId,
          processSearchCriteria: workflowFilters,
          moduleSearchCriteria: { ...searchFilters, sortBy, sortOrder },
          limit,
          offset,
        },
      }),
    select: (data) => {
      const { statusMap, totalCount } = data;
      const queryClient = useQueryClient();
  
      // Update the status map in the query cache
      queryClient.setQueryData(`INBOX_STATUS_MAP_${ModuleCode}`, statusMap);
  
      // Format the response data
      if (data.items.length) {
        return data.items.map((obj) => ({
          searchData: obj.businessObject,
          workflowData: obj.ProcessInstance,
          statusMap,
          totalCount,
        }));
      } else {
        return [{ statusMap, totalCount, dataEmpty: true }];
      }
    },
    retry: false,
    ...config,
  });

  return {
    ...query,
    searchResponseKey,
    businessIdsParamForSearch,
    businessIdAliasForSearch,
    searchFields: getSearchFields(true)[ModuleCode],
  };
};

export default useNewInboxGeneral;
