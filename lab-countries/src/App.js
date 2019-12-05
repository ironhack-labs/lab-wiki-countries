import React, { Component } from "react";
import './App.css';
import Navbar from '../src/components/Navbar';
import Countries from "./components/CountryList";
import Detail from "./components/CountryDetail"
import { Switch, Route } from "react-router-dom";


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App">
          <Navbar />
        </div>
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
