import { useCallback } from "react";
import { useQuery } from "./useQuery";

export function usePokemon(name: string = ""){
  const queryKey = ['pokemon', name];
  const queryFn = useCallback(async () => {
    return fetch(`${import.meta.env.VITE_API_BASE_URL}/pokemon/${name}`).then(res => res.json());
  }, [name]);

  return useQuery({
    queryKey,
    queryFn
  })
}