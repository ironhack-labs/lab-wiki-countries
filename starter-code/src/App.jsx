import React, { Component } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import JSONcountries from "./countries";

import NavBar from "./views/NavBar";
import CountryList from "./components/CountryList";
import CountryDetail from "./views/CountryDetail";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: JSONcountries
    };
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="row">
          <div className="col-5">
            <CountryList />
          </div>
          <div className="col-7">
            <div className="container d-flex justify-content-around">
              <Switch>
                <Route path="/:id" component={CountryDetail} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
