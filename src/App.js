import React from "react";
import countries from "./countries.json";
import { Country } from "./Country";
import { CountryDetail } from "./CountryDetail";
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route } from "react-router-dom";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries,
      selectedCountry: null
    };
    this.selectCountry = this.selectCountry.bind(this);
  }

  selectCountry(cca3) {
    this.setState({ selectedCountry: cca3 });
  }

  getCountry(cca3) {
    return this.state.countries.find(country => country.cca3 === cca3);
  }

  render() {
    const selectedCountry = this.getCountry(this.state.selectedCountry);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul class="list-group">
              {this.state.countries.map((e, i) => {
                return (
                  <Country
                    onSelect={this.selectCountry}
                    name={e.name.common}
                    cca3={e.cca3}
                  />
                );
              })}
            </ul>
          </div>
          <div className="col-md-6">
            <Switch>
              <Route exact path="/:id" component={CountryDetail} />
            </Switch>

            <CountryDetail
              cca3={selectedCountry && selectedCountry.cca3}
              name={selectedCountry && selectedCountry.name.common}
              capital={selectedCountry && selectedCountry.capital}
              area={selectedCountry && selectedCountry.area}
              borders={selectedCountry && selectedCountry.borders}
            />
          </div>
        </div>
      </div>
    );
  }
}
