import React from "react";
import CountryDetail from "./component/CountryDetail/CountryDetail";
import countriesJSON from "./countries.json";
import { Link, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: countriesJSON
    };
  }

  showCountries = () => {
    return this.state.countries.map((eachCountry, i) => {
      return (
        <li key={eachCountry.cca3}>
          <Link to={"/countrydetail/" + eachCountry.cca3}>
            {eachCountry.name.common}
          </Link>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="country-list">
          List of Countries
          <br />
          <Link to="/">Home</Link>
          <br />
          {this.showCountries()}
        </div>
        <div className="country-detail">
          <Switch>
            <Route
              exact
              path="/countrydetail/:id"
              render={props => (
                <CountryDetail
                  {...props}
                  listOfCountries={this.state.countries}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
