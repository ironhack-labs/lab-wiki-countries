import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;

  return (
    <div>
      {countries.map((country) => {
        return (
          <div>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common}
            />
            <Link to={`/${country.alpha3Code}`}><p>{country.name.common}</p></Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
