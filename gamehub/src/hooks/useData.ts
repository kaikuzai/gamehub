import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import React from "react";
import apiClient from "../services/api-client";


interface FetchResponse<T>{
  count: number;
  results: T[];
}

 const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return { data, error, isLoading };
}

export default useData
