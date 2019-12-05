import React, {Component} from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import CountryDetail from "./components/CountryDetail";
import Countries from "./countries.json";

class App extends Component {
  constructor() {
    super();

    this.countries = [...Countries];
    this.state = {
      countries: this.countries
    };
  }

  findName(countryCode){
    let countryPayload  = [...this.state.countries]
    countryPayload = countryPayload.filter(country => country.cca3 === countryCode)[0]

    return countryPayload.name.common
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
              <div className="list-group">
                {this.state.countries.map((country, idx) => (
                  <Link key={idx} to={"/countryDetail/" + country.cca3} className="list-group-item list-group-item-action" >
                    {country.flag} {country.name.common}
                  </Link>
                ))}
              </div>
            </div>

            <Switch>
              <Route exact path="/countryDetail/:countryCode"
                render={
                  props => {
                    let countryCode = props.match.params.countryCode;

                    let countryPayload  = [...this.state.countries]
                  countryPayload = countryPayload.filter(country => country.cca3 === countryCode)[0]

                  return (
                    <CountryDetail country={countryPayload} findName={(cc) => this.findName(cc)}></CountryDetail>
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
