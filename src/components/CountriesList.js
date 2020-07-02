import React, { Component } from 'react';
import countries from '../countries.json';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route, Link } from 'react-router-dom';

class CountriesList extends Component {
  state = {
    countriesArr: countries,
  };

  printCountries = () => {
    return this.state.countriesArr.map((c) => {
      let flagSrc = `https://www.countryflags.io/${c.cca2}/flat/64.png`;
      return (
        <Link
          key={c.cca2}
          className="list-group-item list-group-item-action"
          to={'/' + c.cca3}
        >
          <img src={flagSrc} alt="flag"></img> {c.name.common}
        </Link>
      );
    });
  };

  render() {
    return (
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">{this.printCountries()}</div>
      </div>
    );
  }
}

export default CountriesList;
