import React, { Component } from 'react';
import CountryDetail from '../components/CountryDetail';
import CountryFile from '../countries.json';
import { Switch, Route, NavLink } from 'react-router-dom';

class CountryList extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              {CountryFile.map((country, index) => (
                <NavLink
                  exact
                  className="list-group-item list-group-item-action"
                  to={`/country/${country.cca3}`}
                  key={`country-${index}`}
                >
                  {country.flag}
                  {country.name.official}
                </NavLink>
              ))}
            </div>
          </div>
          <Switch>
            <Route exact path="/country/:id" component={CountryDetail} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default CountryList;
