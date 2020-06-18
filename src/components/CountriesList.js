import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default class CountriesList extends Component {
  state = {
    countries: countries,
  };
  render() {
    return (
      <div>
        <h2>Countries</h2>
        {this.state.countries.map((country, index) => {
          return (
            <ul className="list-group" key={index}>
              <Link
                className="list-group-item"
                to={`/countries/${country.cca3}`}
              >
                <img src={country.image} alt="not working"></img>
                {country.flag} {country.name.official}{' '}
              </Link>
            </ul>
          );
        })}
      </div>
    );
  }
}
