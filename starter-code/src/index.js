import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import Country from "./Country"
import "bootstrap/dist/css/bootstrap.css";


ReactDOM.render(
  <BrowserRouter>
    <Country />
  </BrowserRouter>,
  document.getElementById("root")
);
