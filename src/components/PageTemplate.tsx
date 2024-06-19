import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function PageTemplate(){
  return(
    <Container maxWidth="sm">
      <Header />
      <Outlet />
    </Container>
  )
}