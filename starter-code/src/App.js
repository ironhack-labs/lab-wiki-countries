import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import countries from "./countries.json";
import CountryDetail from "./CountryDetail"
import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    countries: countries
  };

  render() {
    return (
      <React.Fragment>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
          <div className="all">
            <div className="container">
            <div className="row">
              <div className="col-7" style={{height: "90vh", overflow: "scroll", minWidth: "25%"}}>
                <div className="list-group">
                  {this.state.countries.map((country, idx) => {
                    return <Link key={idx} className="list-group-item list-group-item-action" to={`/${country.cca3}`}>
                            {country.flag} {country.name.common}
                           </Link>
                  })}
                </div>
              </div>
            </div>
          </div>
          <Switch>
            <Route path='/:tag' component={CountryDetail} />
          </Switch>
          </div>
      </React.Fragment>
    );
  }
}

export default App;
