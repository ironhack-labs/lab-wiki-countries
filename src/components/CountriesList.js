import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: props,
    };
  }

  render() {
    return (
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {this.state.countries.countriesList.map((country, index) => {
            return (
              <Link
                key={index}
                className="list-group-item list-group-item-action"
                to={`/${country.cca3}`}
              >
                <img
                  src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                  alt=""
                />
                {country.name.common}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
