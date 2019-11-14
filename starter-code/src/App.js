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
      <div>
        <header className="col-12">Wiki Countries</header>
        <div className="App">
          <div className="nav col-4">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {this.showCountries()}
            </ul>
          </div>
          <div className="body col-8">
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
