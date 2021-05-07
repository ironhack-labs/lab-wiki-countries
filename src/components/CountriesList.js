import React from 'react';
import { Link } from 'react-router-dom';

export default class CountriesList extends React.Component {
  state = {
    countries: this.props.countries,
  };

  render() {
    const { countries } = this.state;
    return (
      <div className="list-group">
        {countries.map((country) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.cca3}`}
              key={country.cca3}
            >
              {country.name.common}
            </Link>
          );
        })}
      </div>
    );
  }
}
