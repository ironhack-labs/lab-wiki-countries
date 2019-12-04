import React, { Component } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Detail from "./components/CountryDetail"
import { Switch, Route} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5 dropdown-content">
              <Countries />
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path="/country/:id" component={Detail} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
}
}

export default App;