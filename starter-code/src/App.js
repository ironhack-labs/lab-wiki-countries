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
            <img
              src={
                "https://www.countryflags.io/" +
                eachCountry.cca2 +
                "/flat/64.png"
              }
              alt={eachCountry.name.common}
            />{" "}
            {eachCountry.name.common}
          </Link>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <header className="col-12">Wiki Countries</header>
        <div className="App">
          <div className="nav col-5">
            <ul>{this.showCountries()}</ul>
          </div>
          <div className="body col-7">
            <p>
              Click on a country to the left to get more information about it!
            </p>
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
      </div>
    );
  }
}

export default App;
