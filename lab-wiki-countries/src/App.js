import React from "react";
import "./App.css";
import allTheCountries from "./countries.json";
import { Switch, Route, Link } from "react-router-dom";
import CountryComponent from "./components/countryComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: allTheCountries
    };
  }

  showCountries = () => {
    return this.state.countries.map((eachCountry, i) => {
      return (
        <div key={i}>
          <Link to={"/" + eachCountry.cca3}>
            {eachCountry.flag}
            {eachCountry.name.common}
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div
          className="App"
          style={{ width: "20%", float: "left", marginLeft: "10%" }}
        >
          {this.showCountries()}
        </div>
        <div style={{ width: "60%", float: "right", marginLeft: "10%" }}>
          <Switch>
            <Route
              exact
              path="/:code"
              render={props => (
                <CountryComponent
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
