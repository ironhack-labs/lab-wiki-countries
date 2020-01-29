import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import countryDetails from "./components/CountryDetail";

ReactDOM.render(
  <BrowserRouter>
    <div id="root">
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="flexbox">
        <App />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/countryDetail/:cca3" component={CountryDetail} />
        </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
