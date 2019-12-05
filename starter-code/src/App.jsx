import React from "react";
import "./App.css";
import HomeView from "./views/HomeView";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div id="root">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
      <Switch>
        <Route path="/:country" component={HomeView} />
      </Switch>
    </div>
  );
}

export default App;
