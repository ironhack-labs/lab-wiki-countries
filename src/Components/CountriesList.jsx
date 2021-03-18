import React, { PureComponent } from 'react';
import countriesJSON from '../countries.json';
import { Link } from 'react-router-dom';

export class CountriesList extends PureComponent {
  render() {
    return (
      <div>
        {countriesJSON.map((country, i) => (
          <div class="container">
            <div class="row">
              <div class="col-5">
                <div class="list-group">
                  <Link to={`/${country.cca3}`}>{country.name.common}</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CountriesList;
