import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  getCountryCodeToShow(countryCode) {
    this.props.setState({ countryCode: countryCode });
  }

  render() {
    const countriesList = this.props.countries.map((country) => (
      <li key={country.alpha3Code} className="d-flex align-items-center">
        <Link
          to={'/' + country.alpha3Code}
          onClick={() => this.getCountryCodeToShow(country.alpha3Code)}
        >
          <img src={country.flag} alt={country.name + 'flag'} />
          {country.name}
        </Link>
      </li>
    ));
    return <ul className="countries-list">{countriesList}</ul>;
  }
}

export default CountriesList;
