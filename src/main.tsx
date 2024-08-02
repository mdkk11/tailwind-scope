import React from "react";

import { Global } from "@emotion/react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import globalStyle from "./globalStyles";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <App />
  </React.StrictMode>,
);
