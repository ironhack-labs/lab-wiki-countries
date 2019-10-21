import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ListCountries from "./components/listCountries";
import CountryDetails from "./components/CountryDetails";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                <ListCountries />
              </div>
            </div>
            <div className="col-7">
            <Switch>
              <Route exact path="/:id" component={CountryDetails} />
            </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
