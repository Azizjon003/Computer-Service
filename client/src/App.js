import React from "react";
import Route from "./routes";
import HeaderApp from "./components/headerApp/HeaderApp";
import NavbarApp from "./components/headerApp/NavbarApp";
import SidebarApp from "./components/sidebarApp/SidebarApp";
import { categoryLink } from "./components/sidebarApp/SidebarData";
import ThemeProvider from "./themes";
// console.log(categoryLink);
const App = () => {
  return (
    <ThemeProvider>
      <HeaderApp />
      <NavbarApp />
      <Route />
    </ThemeProvider>
    // <h1></h1>
  );
};

export default App;
