import { useCallback } from "react";
import PokeAPI from "pokeapi-typescript";
import { useQuery } from "./useQuery";

export function usePokemon(name: string = ""){
  const queryKey = ['pokemon', name];
  const queryFn = useCallback(async() => {
    return PokeAPI.Pokemon.resolve(name);
  }, [name]);

  return useQuery({
    queryKey,
    queryFn
  })
}