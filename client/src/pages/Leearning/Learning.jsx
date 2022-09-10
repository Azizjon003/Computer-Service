import React from "react";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Typography } from "@mui/material";

const Learning = function () {
  return (
    <>
      <Button startIcon={<AcUnitIcon />} variant="contained">
        Hello World
      </Button>
      <Typography
        variant="h6"
        component="a"
        sx={{
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "gray",
          },
        }}
      >
        It uses h1 style but it is p tag
      </Typography>
      <Typography variant="h1" sx={{ fontSize: { xs: "10px", sm: "20px" } }}>
        Responsive Title
      </Typography>
    </>
  );
};

export default Learning;
