import React, { Component } from "react";
import Countries from "../countries.json";
import CountryBox from "./CountryBox";
import CountryDetails from "./CountryDetails";
import { Switch, Route } from "react-router-dom";

class DynamicCountriesList extends Component {
  constructor() {
    super();
    this.state = {
      Countries: Countries
    };
  }
  render() {
    return (
      <>
        <div class="col-5">
          <table>
            {this.state.Countries.map((elm, idx) => (
              <CountryBox key={idx} {...elm} />
            ))}
          </table>
        </div>
        {this.state.Countries.map((elm, idx) => (
          <div class="col-7">
            <Switch>
              <Route
                path="/{}"
                render={() => <CountryDetails key={idx} {...elm} />}
              />
              <Route path="/:color" render={match => <CountryDetails {...match} />} />

            </Switch>
          </div>
        ))}
      </>
    );
  }
}

export default DynamicCountriesList;
