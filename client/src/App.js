import React from "react";
import Button from "@mui/material/Button";

import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

const App = () => {
  return (
    <>
      <Button variant="contained">Hello World</Button>
      <SignIn />
      <SignUp />
    </>
  );
};

export default App;
