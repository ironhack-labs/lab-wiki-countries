import React, { Component } from 'react';
import './CountryDetail.css';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import countries from '../../countries.json';
import ListCountry from '../ListCountry/ListCountry';

class CountryDetail extends Component {
  state = {
    countries: [],
  }
  
  componentDidMount() {
    this.setState({
      countries: countries
    })
  }
  
  listCountries = (array) => {
    return array.map((country) => {
      return (
        <Link to={`/${country.cca3}`} key={country.cca3} class="list-group-item list-group-item-action"> { country.flag } { country.name.common } </Link>
        );
      });
    }
    
    render() {
      return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
        <Link to="/" className="navbar-brand">WikiCountries</Link>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div className="col-5 country-list">
            <div class="list-group">
              { this.listCountries(this.state.countries) }

            </div>
          </div>
          <Switch >
            <Route exact path="/:cca3" render={(props) => <ListCountry {...props} countries={countries} />} />

          </Switch>
        </div>
      </div>
      </div>


          
    );
  };
};

export default CountryDetail;