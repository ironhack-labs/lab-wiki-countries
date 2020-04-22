import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/About.js";
import Countries from "./countries.json";
import "bulma/css/bulma.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div class="columns">
            <div class="column">
              First column
              {Countries.map((item, index) => {
                return <div key={index}>{item.name.official}</div>;
              })}
            </div>

            <div class="column">Second column</div>
          </div>
          <Link to="/about">About</Link>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
