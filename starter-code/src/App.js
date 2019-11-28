import React, { Component } from "react";
import CountryDetail from "./CountryDetail";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import SideContainer from "./SideContainer";
import data from "./countries";

const NotFound = () => {
  return <div>404 not found</div>;
};

class App extends Component {
  state = {
    countryList: data
  };
  render() {
    // console.log(data);
    return (
      <div className="App">
        <Navbar />

        <div className="sideContainer">
          <SideContainer countries={this.state.countryList} />
          <Switch>
            <Route exact path="/countryDetail/:id" component={CountryDetail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
