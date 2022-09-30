import React from "react";
import Route from "./routes";
import HeaderApp from "./components/headerApp/HeaderApp";
import NavbarApp from "./components/headerApp/NavbarApp";
import ServiceCotolog from "./components/serviceCotolog/ServiceCotolog";
import ThemeProvider from "./themes";
import Footer from "./components/footer/Footer";
import Pages from "./components/pages/Pages";

const App = () => {
  return (
    <ThemeProvider>
      <HeaderApp />
      <NavbarApp />
      <Pages />
      <Route />
      {/* <ServiceCotolog /> */}
      <Footer />
    </ThemeProvider>
  );
};

export default App;
