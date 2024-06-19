import { AppBar, Toolbar, Typography } from "@mui/material";

export function Header(){
  return(
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">Pokedex</Typography>
      </Toolbar>
    </AppBar>
  )
}