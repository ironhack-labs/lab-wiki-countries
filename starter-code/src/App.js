import React from 'react';

import './App.css';

import Countries from "./countries.json";
import CountriesList from './CountriesList';
import CountryDetail from './CountryDetail';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  state = {

    countries: Countries
  }

  render() {
    return (
      <div className="App">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>

          <div className="container">
            <div className="row">

              <div className="col-sm-6">
                <div className="list-group">

                  {this.state.countries.map(country => (
                    <CountriesList key={Math.random()} CountryName={country.name.common} href={country.cca3}></CountriesList>
                  ))}

                </div>
              </div>

              <Switch>
                <Route
                  exact
                  path="/:id"
                  render={props => {
                    let foundCountryArr = this.state.countries.filter(country => country.cca3 === props.match.params.id);
                    return (
                      <CountryDetail
                        name={foundCountryArr[0].name.common}
                        capital={foundCountryArr[0].capital[0]}
                        area={foundCountryArr[0].area}
                      >
                      </CountryDetail>
                    );
                  }}
                />
              </Switch>

            </div>
          </div>

        </div>
      </div>
    );
  }


}

export default App;


