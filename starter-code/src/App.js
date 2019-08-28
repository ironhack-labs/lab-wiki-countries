import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import CountriesDetails from './views/CountryDatails';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Home/>
        <Switch>
          <Route path="/:id" component={CountriesDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
