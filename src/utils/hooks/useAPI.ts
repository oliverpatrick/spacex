import { useState } from "react";
import { useQuery } from "react-query";
import { getRequest } from "../axios";

function useGetReactQueryAndAxios(
  queryKey: string,
  endpoint: string,
  enabled: boolean
) {
  const [getResult, setGetResult] = useState<string | null | any>(null);

  const fortmatResponse = (res: any) => {
    return JSON.stringify(res, null, 2);
  };

  const { isLoading, isError, error } = useQuery(
    queryKey,
    async () => {
      const response = await getRequest(endpoint);
      return {
        content: response.data,
        headers: response.headers,
        status: response.status,
      };
    },
    {
      enabled: enabled,
      onSuccess: (res) => {
        const result = {
          status: res.status,
          headers: res.headers,
          data: res.content,
        };

        setGetResult(fortmatResponse(result));
      },
      onError: (err: any) => {
        setGetResult(fortmatResponse(err.response?.data || err));
      },
    }
  );

  return { data: getResult, isLoading, isError, error };
}

export default useGetReactQueryAndAxios;
