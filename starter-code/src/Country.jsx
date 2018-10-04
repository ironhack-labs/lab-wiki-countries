import React from "react";
import "./style.css";
import CountryDetail from "./CountryDetail";
import { Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import countries from "./countries.json";

class Country extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: countries
    };
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {this.state.countries.map((e, i) => (
                <NavLink
                  to={`/${e.cca3}`}
                  className="list-group-item list-group-item-action"
                  key={e.cca3}
                >
                  {e.name.common}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="col-7">
            <Route
              exact
              path={`/:id`}
              render={props => (
                <CountryDetail
                  id={props.match.params.id}
                  countries={this.state.countries}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Country