import React from "react";
import Button from "@mui/material/Button";

import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Checkout from "./pages/Checkout/Checkout";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <>
      <Dashboard />
      <SignIn />
      <SignUp />
      <Checkout />
    </>
  );
};

export default App;
