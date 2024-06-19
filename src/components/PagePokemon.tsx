import { useParams } from "react-router-dom"

export function PagePokemon(){
  const {name} = useParams();

  return <p>Pokemon: {name}</p>
}