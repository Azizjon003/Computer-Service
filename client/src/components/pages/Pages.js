import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalog1Page1 from "./catalog1/page1/Catalog1Page1";
import './pages.css'

export default function Pages() {
  return (
    <Box>
      <Routes>
        <Route path="/remont-noutbuk" element={<Catalog1Page1 />} />
      </Routes>
    </Box>
  );
}
