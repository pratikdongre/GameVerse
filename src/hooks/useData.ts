import { useEffect, useState } from "react";
import api from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      const controller = new AbortController();
      const signal = controller.signal;

      const fetchData = async () => {
        try {
          const response = await api.get<FetchResponse<T>>(endpoint, {
            signal,
            ...requestConfig,
          });
          console.log(response.data.results);
          setData(response.data.results);
          setIsLoading(false);
          //   console.log("this " + deps);
        } catch (err: any) {
          if (err instanceof CanceledError) return;
          console.error(err);
          setIsLoading(false);
          setError(err.message);
        }
      };
      fetchData();
      return () => {
        controller.abort();
      };
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
}

export default useData;
