import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import CountryDetails from "./CountryDetails";

class Countries extends Component {
  render() {
    return (
      <div className="app">
        {/* Div on left side with list of countries */}
        <div>
          {this.props.countries.map((country, index) => {
            return (
              <Link
                className="country"
                key={index}
                to={`/country/${country.area}`}
              >
                <span>{country.flag}</span>
                <span>{country.name.common}</span>
              </Link>
            );
          })}
        </div>
        <Switch>
          <Route
            exact
            path="/country/:area"
            render={props => (
              <CountryDetails {...props} countries={this.props.countries} />
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default Countries;