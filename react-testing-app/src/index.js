import React from "react";
import ReactDOM from "react-dom/client";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import "./index.css";
import App from "./App";

import { PrimeReactProvider } from "primereact/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>
);
