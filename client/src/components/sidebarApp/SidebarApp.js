import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { categoryLink } from "./SidebarData";
// import SidebarCategory from "./SidebarCategory";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import { editDataIndex } from "../redux/testsSlice";
import './sidebarApp.css'
const drawerWidth = 240;

export default function SidebarApp() {
  // editDataIndex
  const indexData = useSelector((state) => state.test.dataIndex);
  console.log(indexData);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    top: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ paddingX: "50px" }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Drawer
            sx={{
              width: 400,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 400,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar />
            <Divider />
            <List>
              {categoryLink.map((text) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{ textAlign: "center", marginY: 2 }}
                  >
                    {text.nameChap}
                  </Typography>
                  {text.categoryChap.map((item, i) => {
                    return (
                      <ListItemButton
                        key={i}
                        onMouseEnter={(e) =>
                          dispatch(editDataIndex(item.id))
                        }
                        sx={{
                          marginX: 6,
                          background: indexData === item.id ? "blue" : "none",
                          borderRadius: 5,
                          color: indexData === item.id ? "#fff" : "black",
                          ":hover": {
                            background: "blue",
                          },
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              component="div"
                              variant="p"
                            >
                              {item.name}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    );
                  })}
                </ListItem>
              ))}
            </List>
            <Divider />
          </Drawer>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 1, }}
          >
            <Toolbar />
            {categoryLink.map((category, indexC) => {
              return category.categoryChap.map((category2, indexC2) => {
                return (
                  <Box key={indexC2} className="sidebar-grid-card"
                    // sx={{ display: 'grid', gridTemplateColumns:'250px', bgcolor: category2.id>20&& 'blue'}}
                  >
                    {category2.id === indexData &&
                      category2.nameCategory &&
                      category2.nameCategory.map((category3, indexC3) => {
                        return (
                          <Box
                          
                          >
                            <Typography
                              key={indexC3}
                              component="div"
                              variant="h6"
                              
                              sx={{
                                marginY: 1,
                                color: "rgb(8, 10, 155)",
                              }}
                            >
                              {category3.nameLink}
                            </Typography>
                            {category3.services &&
                              category3.services.map((category4, indexC) => {
                                return (
                                  <>
                                    <Typography
                                      key={indexC}
                                      component="div"
                                      variant="h5"
                                      sx={{ marginY: 2 }}
                                    >
                                      {category4.servicesName}
                                    </Typography>
                                    {category4.servicesLink.map(
                                      (category5, indexC5) => {
                                        return (
                                          <Typography
                                            key={indexC5}
                                            component="div"
                                            variant="p"
                                            sx={{
                                              marginY: 1,
                                              color: "rgb(0, 10, 0, 0.5)",
                                              ":hover": {
                                                
                                              color: "blue",
                                              }
                                            }}
                                          >
                                            {category5.nameLinkDepartment}
                                          </Typography>
                                        );
                                      }
                                    )}
                                  </>
                                );
                              })}
                              <Divider/>
                          </Box>
                        );
                      })}
                  </Box>
                );
              });
            })}
          </Box>
        </Box>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Box
          onClick={toggleDrawer("left", true)}
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid ",
            padding: "5px 15px",
            borderRadius: "18px",
            justifyContent: "center",
          }}
        >
          <MenuIcon
            sx={{
              mr: 2,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            Каталог
          </Typography>
        </Box>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
