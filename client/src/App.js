import React from "react";
import HeaderApp from "./components/headerApp/HeaderApp";
import NavbarApp from "./components/headerApp/NavbarApp";
import SidebarApp from "./components/sidebarApp/SidebarApp";
import { categoryLink } from "./components/sidebarApp/SidebarData";
import ThemeProvider from "./themes";
console.log(categoryLink);
const App = () => {
  return (
    <ThemeProvider>
      <HeaderApp />
      <NavbarApp />
    </ThemeProvider>
  );
};

export default App;
