import React, { Component } from 'react'
import CountryDetail from '../CountryDetail';
import NavBar from '../NavBar';
import countries from '../../Utils/countries.json';
import { Switch, Route, NavLink } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: countries
    }
  }

  render() {
    const countriesList = this.state.countries.map( (country, i) => 
      (
        <NavLink 
          key={i} 
          className="list-group-item list-group-item-action"
          activeClassName="active has-text-white"
          to={`/${country.cca3}`}>
          
          {country.flag} {country.name.official}

        </NavLink>
      ))

    return (
      <div>
        <NavBar title="WikiCountries" />
        <div className="container">
          <div className="row">
            <div className="col-5" style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
              <div className="list-group">
                {countriesList}
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path='/:cca3' component={CountryDetail}/>
              </Switch>  
            </div>
          </div>
        </div>
      </div>
    );
  }
}