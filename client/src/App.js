import React from "react";
import Route from "./routes";
import HeaderApp from "./components/headerApp/HeaderApp";
import NavbarApp from "./components/headerApp/NavbarApp";
import SidebarApp from "./components/sidebarApp/SidebarApp";
import { categoryLink } from "./components/sidebarApp/SidebarData";
import ServiceCotolog from "./components/serviceCotolog/ServiceCotolog";
import ThemeProvider from "./themes";

const App = () => {
  return (
    <ThemeProvider>
      <HeaderApp />
      <NavbarApp />
      <Route />
      <ServiceCotolog />
    </ThemeProvider>
  );
};

export default App;
