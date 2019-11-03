import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import file from "./countries.json";
import CountryDetail from "./CountryDetail";

function App() {
  return (
    <div className="App" class="row">
      <div class="col-5">
        {file.map(country => (
          <div>
            <Link to={"/CountryDetail/" + country.cca3}>
              {country.name.common}
            </Link>
          </div>
        ))}
      </div>
      <div class="col-7">
        <Switch>
          <Route
            exact
            path={"/CountryDetail/:cca3"}
            component={CountryDetail}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
