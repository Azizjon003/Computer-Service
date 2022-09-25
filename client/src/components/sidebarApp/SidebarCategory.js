import { Box, ListItemText, Typography } from "@mui/material";
import React, { useState } from "react";
import SidebarCategoryLink from "./SidebarCategoryLink";

export default function SidebarCategory({ data, i }) {
  // console.log(open);

  const [openCategory, setOpenCategory] = useState(false);
  const [indexLink, setIndexLink] = useState(0)
  const onMouseEnterFunction = (e) => {
    setIndexLink(i)
  }

  return (
    <Box>
      <ListItemText 
      // sx={{borderRight: '1px solid'}}
      >
        <Typography
          onClick={onMouseEnterFunction}
            // onMouseLeave={(e) => setOpenCategory(false)}
          //   onMouseUpCapture={(e) => setOpenCategory(true)}
          //   onMouse
        //   key={i}
          component="div"
          variant="p"
          sx={{ my: 1}}
        >
          {data.name}
        </Typography>
     </ListItemText>
     <SidebarCategoryLink  openCategory={openCategory} data={data} indexLink={indexLink} i={i}/>
    </Box>
  );
}
