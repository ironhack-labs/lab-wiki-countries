import React from "react";
import "./App.css";
import CountryDetail from "./components/CountryDetail";
import { Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
// import CountriesList from "./components/CountriesList";
import countries from "./countries.json";

class App extends React.Component {
  render() {
    const countriesToRender = countries.map(country => {
      return (
        <Link
          key={country.cca3}
          className="list-group-item list-group-item-action"
          to={`/${country.cca3}`}>
          {country.flag}
          {country.name.common}
        </Link>
      );
    });

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}>
              <div className="list-group">{countriesToRender}</div>
            </div>
            <Switch>
              <Route exact path="/:cca3" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
