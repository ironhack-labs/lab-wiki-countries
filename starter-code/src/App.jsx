import React, { Component } from "react";
import CountryDetail from "./components/CountryDetail";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import countries from "./countries";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: countries
    };
  }

  render() {
    return (
      <Container>
        <div className="row">
          <div className="col-5">
            {this.state.countries.map(country => (
              <Link to={`/country/${country.cca3}`} key={country.name.official}>
                <div>{country.name.official}</div>
              </Link>
            ))}
          </div>
          <div className="col-7">
            <Switch>
              <Route path="/country/:id" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </Container>
    );
  }
}
