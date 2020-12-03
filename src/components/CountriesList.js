import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

class CountriesList extends React.Component {
  state = {
    countriesList: countries,
  };

  render() {
    return (
      <div>
        {this.state.countriesList.map((country) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.cca3}`}
            >
              {country.flag} 
              {country.name.common}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
