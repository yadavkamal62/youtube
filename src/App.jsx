import React from "react";
import { Provider } from "react-redux"; // Added missing import
import Body from "./comonents/Body";
import Head from "./comonents/Head";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <Head />
      <Body />
    </Provider>
  );
}

export default App;