import React from "react";
import "./App.css";
import CountryView from "./views/CountryDetail";
import countries from "./countries";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <div className="col-5 overflow-auto" style={{ maxHeight: "90vh" }}>
              <div className="list-group">
                {/* List of all countries goes here */}
                {countries.map(country => {
                  return (
                    <li key={country.cca3} className="list-group-item">
                      <Link to={country.cca3}>{country.name.common}</Link>
                    </li>
                  );
                })}
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route path="/:id" component={CountryView} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
