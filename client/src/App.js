import React from "react";
import Goo from "./routes";
import ThemeProvider from "./themes";

const App = () => {
  return (
    <ThemeProvider>
      <Goo />
    </ThemeProvider>
  );
};

export default App;
