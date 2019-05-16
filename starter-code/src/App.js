import React, { Component } from "react";
import "./App.css";
import CountryDetail from "./components/CountryDetail";
import countries from "./countries.json";
import { Route, Switch, Redirect, Link } from "react-router-dom";
const styles = {
  maxHeight: "90vh",
  overflow: "scroll"
};


class App extends Component {
  state = {
    countries: countries
  };
  showCountries = () => {
    return this.state.countries.map(eachcountry => {
      console.log(eachcountry);
      return (
        <div>
          <Link to={`/country/${eachcountry.cca3}`}>
            {eachcountry.name.common}
            {eachcountry.flag}
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="App">
        {/* <CountryDetail/> */}

        {/* <Switch>
        <Route exact path="/country/:cca3" component={CountryDetail} />
        </Switch> */}

        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
      
    
        <div className="container">
          <div className="row">
            <div className="col-5" style={styles}>
              <div className="list-group" style={{ textAlign: "left" }}>
                {this.showCountries()}
              </div>
            </div>
            <Switch>
            <Route
              exact
              path="/country/:cca3"
              component={props => <CountryDetail {...props} />}
            />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
