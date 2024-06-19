import { usePokemonList } from "../api/usePokemonList"

export function PagePokemonList(){
  const {data} = usePokemonList();

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}