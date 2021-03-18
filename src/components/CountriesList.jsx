import React from 'react';
import { Link } from 'react-router-dom';
import countries from './countries.json';

class CountriesList extends React.Component {
  render() {
    const countries = this.props.countries;
    return (
      <div>
        <h1>Countries List</h1>
        {countries.map((country) => {
          return (
            <div key={country.cca3}>
              <Link to={`/countries/${country.cca3}`}>
                <p>{country.flag}</p>
                <p>{country.name.official}</p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
