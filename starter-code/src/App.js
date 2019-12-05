import React, { Component } from 'react';
import './App.css';
import Countries from './countries.json';
import { Route } from 'react-router-dom';
import CountryDetail from './countryDetail/CountryDetail';
import { NavLink } from 'react-router-dom';

class App extends Component {
 
  showCountries () {
    return Countries.map((Country, i) => {
      let flag =`https://www.countryflags.io/${Country.altSpellings[0]}/flat/64.png`
      return (
        <div key={i}>
        <NavLink activeClassName="active" exact to={`/${Country.cca3}`}>
        <img src={flag} alt={i}/> {Country.name.common} 
        </NavLink>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container-fluid">
      <div className="row nav-row">WikiCountries</div>
      <div className="row">
        <div className="col-5 max-height-80">
          {this.showCountries()}
        </div>
        <div className="col-7">
          <Route exact path='/:country' component={CountryDetail}/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;