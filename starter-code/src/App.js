import React, { Component } from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import CountriesInfo from "./countries.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <h3>Wikicountries</h3>
        </nav>
        <div className="row">
          <div className="col-5" style={{ maxHeight: "100vh", overflow: "scroll" }}>
            {CountriesInfo.map((country, index) => {
              return (
                <div key={index} className="container">
                  <h3>
                    <Link to={`/countries/${country.cca3}`} className="navbar-brand"> {country.flag}{country.name.official}</Link>
                  </h3>
                </div>
              );
            })}
          </div>
        <div className="col-7">
          <Switch>
            <Route exact path="/countries/:id" component={CountryDetails} />
          </Switch>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
