import { useMutation } from "@tanstack/react-query";
import ApplicationUpdateActionsCustom from "../services/elements/ApplicationUpdateActionsCustom";

/**
 * Custom hook which can make api call to update API of any module
 *
 * @author nipunarora-eGov
 *
 * returns data from update api call
 */


const useUpdateCustom = ( url ) => {
    return useMutation({
        mutationFn: (applicationData) =>
          ApplicationUpdateActionsCustom({
            url,
            body: applicationData,
          }),
        ...config,
      });
    };

export default useUpdateCustom;