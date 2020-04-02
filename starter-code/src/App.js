import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { CountryDetail } from "./componentes/CountryDetail";
import { Link } from "react-router-dom";
import countries from "./countries.json";

function App() {
  const countriesList = countries;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Countries Details</p>
      </header>
      <div className="row">
        <div className="list-group col-5">
          {countriesList.map(e => (
            <Link
              to={`/${e.cca3}`}
              key={e.cca3}
              className="list-group-item list-group-item-action"
            >
              {e.flag} {e.name.common}
            </Link>
          ))}
        </div>
      <Switch>
        <Route path="/:cca3" component={CountryDetail} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
