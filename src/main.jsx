import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DataWrapper } from "./context/Data.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <DataWrapper>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </DataWrapper>
  </BrowserRouter>
);
