import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route } from "react-router-dom";
import { CountryList } from "./components/CountryList";
import countries from "./countries.json";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { CountryDetail } from "./components/CountryDetail";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <CountryList country={countries} />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/:code" component={CountryDetail} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
