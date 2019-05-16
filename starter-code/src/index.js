import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import CountryDetail from "./Components/CountryDetail"

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


serviceWorker.unregister();
