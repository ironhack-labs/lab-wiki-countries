import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './App.css';
import CountryDetail from "./Components/CountryDetail.js";
import countries from "./countries.json";
import { Switch, Route } from "react-router-dom";
import DefaultMessage from "./Components/DefaultMessage.js";


class App extends Component {
  state = {
    allCountries: [...countries]

  }
  render() {
    return (
      <div className="App">
         <div className="header">
          <h3>wikiCountries</h3>
        </div>
        <div className="row">
          <div className="col-5">
            <div className="list-group">
            {this.state.allCountries.map(country => (
              <Link
              to={`/${country.cca3}`}
              key={country.name.common}
              className = "list-group-item list-group-item-action"
              >{country.flag} {country.name.common}
              </Link>
            ))}
            </div>
          </div>
          <div className="col-7">
              <Switch>
                <Route exact path="/" component={DefaultMessage} />
                 <Route  path="/:id" component={CountryDetail} />
              </Switch>
            {/* <CountryDetail allCountries = {this.state.allCountries} ></CountryDetail> */}
          </div>
        </div>
      </div>
    );
  }
}


export default App;
