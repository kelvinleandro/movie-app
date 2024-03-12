import { useState, useEffect, useCallback } from 'react';

function useApi<T>(apiFunc: (...args: any[]) => Promise<T>, ...params: any[]): {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await apiFunc(...params);
      setData(result);
      setError(null);
    } catch (error) {
      setError(error as Error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, [apiFunc, ...params]); 

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
}

export default useApi;