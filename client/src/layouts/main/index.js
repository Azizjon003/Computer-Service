import React from "react";
// @mui
import { styled } from "@mui/material/styles";

const Main = styled("h1")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const MainLayout = () => {
  return <Main>Main Layout</Main>;
};

export default MainLayout;
