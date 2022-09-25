import React from "react";
import Route from "./routes";
import HeaderApp from "./components/headerApp/HeaderApp";
import NavbarApp from "./components/headerApp/NavbarApp";
import ThemeProvider from "./themes";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <HeaderApp />
      <NavbarApp />
      <Footer />
      <Route />
    </ThemeProvider>
  );
};

export default App;
