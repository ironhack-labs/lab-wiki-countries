import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import { WikiCountry } from "./WikiCountry";



ReactDOM.render(
  <div>
    <h1>IronWiki Country Information</h1>
    <BrowserRouter>
      <WikiCountry />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
