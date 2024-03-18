import { useState, useEffect, useCallback } from "react";
import * as helperFunctions from '@/api/helper';

function useApi<T extends keyof typeof helperFunctions>(fetch: T, ...params: any[]): {
  data: Awaited<ReturnType<typeof helperFunctions[T]>> | null;
  isLoading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<Awaited<ReturnType<typeof helperFunctions[T]>> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await (helperFunctions[fetch] as Function)(...params);
      setData(result);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, [fetch, ...params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
}

export default useApi;
