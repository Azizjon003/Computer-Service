import React from "react";
import Routing from "./routes";
import ThemeProvider from "./themes";

const App = () => {
  return (
    <ThemeProvider>
      <Routing />
    </ThemeProvider>
  );
};

export default App;
