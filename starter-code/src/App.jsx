import React from "react";

import Container from "react-bootstrap/Container";
import "./App.css";

import countries from "./countries";

import { Route, Switch, Link } from "react-router-dom";

import CountryDetail from "./components/CountryDetail";

function App() {
  return (
    <Container className="py-5">
      <div className="App">
        <div className="row">
          <div className="col-5 collumn">
            {countries.map(country => (
              <Link to={`/details/${country.cca3}`} key={country.id}>
                <div>{country.name.common}</div>
              </Link>
            ))}
          </div>
          <div className="col-7">
            <Switch>
              <Route path="/details/:id" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
