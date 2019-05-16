import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import countries from "./countries.json";
import CountryModule from "./components/CountryModule";
import CountryDetail from "./components/CountryDetail";
import { Switch, Route } from "react-router-dom";

const styles = {
  maxHeight: "90vh",
  overflow: "scroll"
};

class App extends Component {
  state = {
    countries: countries
  };

  showCountries = () => {
    const countryList = this.state.countries.map(country => {
      return <CountryModule country={country} />;
    });
    return countryList;
  };

  renderSpecificCountryDetails = () => {};

  render() {
    console.log(this.state.countries);
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-5" style={styles}>
              <div className="list-group" style={{ textAlign: "left" }}>
                {this.showCountries()}
              </div>
            </div>
            <Route
              exact
              path="/country/:cca3"
              component={props => <CountryDetail {...props} />}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// <div class="col-5" style="max-height: 90vh; overflow: scroll;">
//   <div class="list-group">
//     <a class="list-group-item list-group-item-action" href="/ZWE">
//       🇿🇼 Zimbabwe
//     </a>
//   </div>
// </div>;
