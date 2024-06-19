import { useCallback } from "react";
import { useQuery } from "./useQuery";

const PARAMS = new URLSearchParams({
  limit: '1500'
});

export function usePokemonList(){
  const queryKey = ['pokemon'];
  const queryFn = useCallback(async () => {
    return fetch(`${import.meta.env.VITE_API_BASE_URL}/pokemon?${PARAMS}`, {
    }).then(res => res.json());
  }, []);

  return useQuery({
    queryKey,
    queryFn
  })
}