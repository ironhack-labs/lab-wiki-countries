import React from 'react';
import { Link } from 'react-router-dom';
class CountriesList extends React.Component {
  render() {
    const list = this.props.countries.map((country) => {
      console.log(this.props.country);
      return (
        <li>
          <Link to={`/country-details/${country.alpha3Code}`}>
            <img
              src={`https://www.countryflags.io/${country.alpha2Code.toLowerCase()}/flat/64.png`}
              alt=""
            />
            {country.name}
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
