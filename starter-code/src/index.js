import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/App.js";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    root
  );
});
