import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import App from "./App.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);