import React from "react";
import Route from "./routes";
import HeaderApp from "./components/headerApp/HeaderApp";
import NavbarApp from "./components/headerApp/NavbarApp";
import ThemeProvider from "./themes";
import Footer from "./components/footer/Footer";
import Pages from "./components/pages/Pages";
import Location from "./components/pages/catalog1/page2/Location/Location";

const App = () => {
  return (
    <ThemeProvider>
      {/* <HeaderApp /> */}
      <NavbarApp />
      <Pages />
      <Route />
      {/* <ServiceCotolog /> */}
{/* <Location /> */}
      <Footer />
    </ThemeProvider>
  );
};

export default App;
