import React from 'react';

import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  // console.log(countries);

  const displayCountries = () => countries.map((country) => <li key={country.cca3}><Link to={`/detail/${country.cca3}`}>{country.flag} {country.name.common}</Link></li>)

  return (
    <ul className="">
      {displayCountries()}
    </ul>
  );
}

export default CountriesList;