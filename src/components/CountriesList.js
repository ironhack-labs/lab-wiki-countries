import React, { Component } from 'react';
import countries from '/Users/andreialvarez/Desktop/Ironhack-Andrei/Module-3/lab-wiki-countries/src/countries.json';
import { Link } from 'react-router-dom';

export class CountriesList extends Component {
  constructor() {
    super();
    this.state = {
      countries: countries,
    };
  } 

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {countries.map((country) => (
                <Link
                  key={country.cca3}
                  to={'/' + country.cca3}
                  className="list-group-item list-group-item-action"
                >
                  {country.flag} {country.name.common}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
