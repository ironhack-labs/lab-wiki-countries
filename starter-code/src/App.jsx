import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeView from "./views/HomeView";

import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div id="root">
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
      <Switch>
        <Route path="/" component={HomeView} />
      </Switch>
    </div>
  );
}

export default App;
