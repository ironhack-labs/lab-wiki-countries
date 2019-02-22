import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import AllCountries from "./countries.json";
import CountryDetails from "./CountryDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryArray: AllCountries
    };
  }
  render() {
    const { countryArray } = this.state;

    return (
      <div className="App">
        <div className="row">
          <div className="col-5">
            {countryArray.map(oneCountry => {
              return (
                <NavLink
                  key={oneCountry.name.official}
                  to={`/country/${oneCountry.name.official}`}
                  className="list-group-item list-group-item-action"
                >
                  <p>
                    {oneCountry.flag} {oneCountry.name.common}
                  </p>
                </NavLink>
              );
            })}
          </div>
          <div className="col-7">
            <Switch>
              <Route path="/country/:countryId" component={CountryDetails} />
              {/* <CountryDetails /> */}
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
