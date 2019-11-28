import React, { Component } from "react";
import CountryList from "./CountryList";
import CountryDetail from "./CountryDetail";
import countries from "../countries.json";
import { Route } from "react-router-dom";

export default class ListGroup extends Component {
  state = {
    countries: [...countries]
  };

  render() {
    // console.log(this.state.countries);
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: "90vh", overflow: "scroll" }}
          >
            <div className="list-group">
              <CountryList countries={this.state.countries} />
            </div>
          </div>
          <Route
            exact
            path="/:id"
            render={props => (
              <CountryDetail {...props} countries={this.state.countries} />
            )}
          />
        </div>
      </div>
    );
  }
}
