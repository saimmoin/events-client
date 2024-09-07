/**
 * difference between hook and component is
 * component returns JSX and hook returns data and functions
 */

import axios from "@/utils/axios";
import { useCallback, useEffect, useState } from "react";

// return data, isLoading, isError, refetch, isSuccess, error
export const useGetData = (path) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const backToInitialState = () => {
    setIsLoading(false);
    setIsError(false);
    setIsSuccess(false);
    setError(null);
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(path);
      setData(response.data);
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
      setIsSuccess(false);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [path]);

  useEffect(() => {
    fetchData();
  }, [path]);

  const refetch = useCallback(() => {
    backToInitialState();
    fetchData();
  }, [path]);

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch,
  };
};
