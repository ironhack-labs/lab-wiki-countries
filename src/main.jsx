
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


import { BrowserRouter as Routes } from "react-router-dom";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
  <Routes>
    <App />
  </Routes>
  </StrictMode>
);
