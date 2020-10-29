import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CountriesList extends Component {
  render() {
    const { country } = this.props;
    return (
      <div>
        <Link to={`/${country.cca3}`}>
          <p>{country.name.common}</p>
        </Link>
      </div>
    );
  }
}
