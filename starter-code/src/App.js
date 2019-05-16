import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import CountryList from "./components/CountryList";
import { Switch, Route } from 'react-router-dom';
import CountryDetail from "./components/CountryDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
       
          <div className="row">
          <div className="col-5">
            <div className="list-group country-list">
        <CountryList />
            </div>
          </div>
          <div className="col-7">
             <Switch>
          <Route path='/:id' component={CountryDetail}/>
        </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
