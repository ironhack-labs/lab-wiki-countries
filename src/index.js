import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css"; 
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);


reportWebVitals();
