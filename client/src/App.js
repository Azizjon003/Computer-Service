import React from "react";
import Route from "./routes";
import HeaderApp from "./components/headerApp/HeaderApp";
import NavbarApp from "./components/headerApp/NavbarApp";
// <<<<<<< HEAD
import SidebarApp from "./components/sidebarApp/SidebarApp";
import { categoryLink } from "./components/sidebarApp/SidebarData";
import ServiceCotolog from "./components/serviceCotolog/ServiceCotolog";
// =======
// >>>>>>> 137bf4c33b8595b3fc6e043a96c7f5acc663179a
import ThemeProvider from "./themes";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <HeaderApp />
      <NavbarApp />
      <Route />
      <ServiceCotolog />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
