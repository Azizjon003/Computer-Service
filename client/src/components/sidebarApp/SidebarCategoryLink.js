import { Box, Typography } from "@mui/material";
import React from "react";
import "./sidebarApp.css";

export default function SidebarCategoryLink({ indexLink, data, i }) {
  console.log(indexLink, 'index');
  return (
    <Box>
      {indexLink ?(
        <Box
          sx={{
            display: "block",
            position: "fixed",
            zIndex: 1,
            background: "#fff",
            marginLeft: 50,
            height: "1000px",
            padding: "50px",
            top: 0,
            left: 0,
          }}
          className="sidebar-category-link-card"
        >
          {data.nameCategory &&
            data.nameCategory.map((item, i) => {
              return (
                <Box>
                  <Typography>{item.nameLink}</Typography>
                 {item.services && item.services.map((item2, index) => { return (

                 <Typography key={index}>
                    {item2.servicesName}
                  </Typography>
                 )})} 
                </Box>
              );
            })}
        </Box>
      ): ''}
    </Box>
  );
}
