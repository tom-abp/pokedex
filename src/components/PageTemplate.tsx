import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function PageTemplate(){
  return(
    <Container fixed={true}>
      <Box height="100vh" overflow="hidden" display="flex" flexDirection="column">
        <Box>
          <Header />
        </Box>
        <Box flexGrow={1}>
          <Outlet />
        </Box>
      </Box>
    </Container>
  )
}