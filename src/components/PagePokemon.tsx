import { useParams } from "react-router-dom"
import { usePokemon } from "../api/usePokemon";
import { Box } from "@mui/material";

export function PagePokemon(){
  const {name} = useParams();
  const {data} = usePokemon(name);

  return (
    <Box overflow="auto" height="100%">
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </Box>
  )
}