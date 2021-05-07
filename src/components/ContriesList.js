import React from 'react';
import { Link } from 'react-router-dom';
class CountriesList extends React.Component {
  render() {
    const list = this.props.countries.map((country) => {
      return (
        <li>
          <Link to={`/country-details/${country.cca3}`}>
            <img
              src={`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`}
              alt=""
            />
            {country.name.common}
          </Link>
        </li>
      );
    });
    return (
      <div className="countries-list">
        <h1>Countries List</h1>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default CountriesList;
