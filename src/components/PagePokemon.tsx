import { useParams } from "react-router-dom"
import { usePokemon } from "../api/usePokemon";

export function PagePokemon(){
  const {name} = useParams();
  const {data} = usePokemon(name);

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}