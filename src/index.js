import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./indexx.css";
import { ApiContextProvider } from "./context/api";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
      <ApiContextProvider>
        <App />
      </ApiContextProvider>
  </HashRouter>
);
