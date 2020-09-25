import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./componentes/Layout";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
