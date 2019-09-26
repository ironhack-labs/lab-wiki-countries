import React, { Component } from 'react';

import countries from './../countries';

import { Link } from 'react-router-dom';

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    const id = props.match.params.id;
    const country = countries.find(item => item.cca3 === id);
    return {
      ...state,
      country
    };
  }

  render() {
    const country = this.state.country;
    console.log(country);
    return (
      (country && (
        <div>
          <h1 className="border-bottom">{country.name.common}</h1>
          <div className="row border-bottom p-2">
            <div className="col-5">Capital</div>
            <div className="col-7">{country.capital}</div>
          </div>
          <div className="row border-bottom p-2">
            <div className="col-5">Area</div>
            <div className="col-7">
              {country.area} km<sup>2</sup>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-5">Borders</div>
            <div className="col-7">
              <ul className="p-2">
                {country.borders.map(border => (
                  <Link to={`/country/${border}`}>
                    <li key={border}>
                      {countries.find(item => item.cca3 === border).name.common}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )) || <div></div>
    );
  }
}
