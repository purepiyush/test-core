import { useQuery, useQueryClient } from "@tanstack/react-query";
import { CustomService } from "../services/elements/CustomService";

/**
 * Custom hook which can make api call and format response
 *
 * @author jagankumar-egov
 *
 *
 * @example
 * 
 const requestCriteria = [
      "/user/_search",             // API details
    {},                            //requestParam
    {data : {uuid:[Useruuid]}},    // requestBody
    {} ,                           // privacy value 
    {                              // other configs
      enabled: privacyState,
      gcTime: 100,
      select: (data) => {
                                    // format data
        return  _.get(data, loadData?.jsonPath, value);
      },
    },
  ];
  const { isLoading, data, revalidate } = Digit.Hooks.useCustomAPIHook(...requestCriteria);

 *
 * @returns {Object} Returns the object which contains data and isLoading flag
 */


const useCustomAPIHook = ({ url, params, body, config = {}, plainAccessRequest,changeQueryName="Random",options={} }) => {
  const client = useQueryClient();
  const { isLoading, data, isFetching, refetch } = useQuery({
    queryKey: [url, changeQueryName].filter((e) => e),
    queryFn: () => CustomService.getResponse({ url, params, body, plainAccessRequest, ...options }),
    gcTime: 0,
    ...config,
  });

  return {
    isLoading,
    isFetching,
    data,
    refetch,
    revalidate: () => {
      data && client.invalidateQueries({ queryKey: [url].filter((e) => e) });
    },
  };
};

export default useCustomAPIHook;