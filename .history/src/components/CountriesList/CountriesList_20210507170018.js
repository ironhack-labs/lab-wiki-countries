import React from 'react';
import { Link } from 'react-router-dom';
import countriesList from '../../';

//class
class CountriesList extends React.Component {
  state = {
    countries: CountriesList,
  };

  render() {
    return (
      <div>
        <div>
          {props.countries.map((country) => (
            <Link to={`/${country.cca3}`} key={country.cca3}>
              {country.flag} {country.name.common}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default CountriesList;
