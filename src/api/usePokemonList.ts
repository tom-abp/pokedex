import { useCallback } from "react";
import { useQuery } from "./useQuery";
import PokeAPI from "pokeapi-typescript";

export function usePokemonList(){
  const queryKey = ['pokemon'];
  const queryFn = useCallback(async () => {
    return PokeAPI.Pokemon.listAll();
  }, []);

  return useQuery({
    queryKey,
    queryFn
  })
}