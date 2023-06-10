// src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {CountriesProvider} from './context/countries.context'

import { BrowserRouter as Router } from "react-router-dom";

// src/index.js
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CountriesProvider>
    <Router>
      <App />
    </Router>
  </CountriesProvider>

);


reportWebVitals();