import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import { App } from "./App";



ReactDOM.render(
  <div>
    <h1>WikiCountries</h1><br/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);