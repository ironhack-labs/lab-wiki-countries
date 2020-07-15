import React, { Component } from 'react';
import countries from './../../countries.json'
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './CountryDetails'

import { Link, Switch, Route } from 'react-router-dom';



class CountriesList extends Component {

    constructor() {
        super()
        this.state = {
            countries
        }
    }


    render() {
        return (
          <article className="container">
            {this.state.countries.map((country, index) => (
              <>
                <li>
                  <Link to={country.cca3}>
                    {country.flag} {country.name.common}{' '}
                  </Link>
                </li>
              </>
            ))}
            <Switch>
              <Route
                path="/:cca3"
                render={(props) => (
                  <CountryDetails {...props} countries={this.state.countries} />
                )}
              />
            </Switch>
          </article>
        );
    }
}

export default CountriesList;
