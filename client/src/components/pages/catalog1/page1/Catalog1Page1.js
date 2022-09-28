import { Box } from "@mui/material";
import React from "react";
import Page1Card1 from "./card1/Page1Card1";
import Page1Card2 from "./card2/Page1Card2";
import Page1Card1Corusel from "./card2/Page1Card2Corusel";
import Page1Card3 from "./card3/Page1Card3";
import Page1Card4 from "./card4/Page1Card4";
import Page1Card5 from "./card5/Page1Card5";
import Page1Card6 from "./card6/Page1Card6";
import Page1Card7 from "./card7/Page1Card7";
import Page1Card8 from "./card8/Page1Card8";
import Page1Card9 from "./card9/Page1Card9";

export default function Page1() {
  return (
    <>
      <Box className="pagesApp">
        <Page1Card1 />
        <Page1Card2 />
        <Page1Card1Corusel />
      </Box>
        <Page1Card3 />
      <Box className="pagesApp">
        <Page1Card4 />
        <Page1Card5 />
        <Page1Card6 />
        <Page1Card7 />
      </Box>
      <Page1Card8 />
      
      <Box className="pagesApp">
        <Page1Card9 />
      </Box>
    </>
  );
}
