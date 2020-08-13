import React, { Component } from 'react';
import './App.css';
import CountriesJSON from './countries.json';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetail from './components/CountryDetail/CountryDetail'


class App extends Component {
  
  state = {
    countries: CountriesJSON
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="list-group">
              { 
                this.state.countries.map( (country, index) => <CountriesList key={index} name={country.name.official} cca3={country.cca3} flag={country.flag}/>)
              }
              </div>
            </div>
            <div className="col-md-8">
              <Switch>
                <Route exact path="/:id" component={CountryDetail}  />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
