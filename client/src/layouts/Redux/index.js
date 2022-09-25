import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routess from "./route/routes";

const Index = () => {
  return (
    <Provider store={store}>
      <Routess />
    </Provider>
  );
};

export default Index;
