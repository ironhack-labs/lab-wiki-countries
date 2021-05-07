import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
  console.log('CountriesList');
  //if (true) return <h3>testing CountriesList</h3>;

  return (
    <div className="CountriesList">
      {props.countries.map((country) => (
        <div key={country.numericCode}>
          <Link to={`/countries/${country.alpha3Code}`}>
            <img src={country.flag} alt={country.name} />
            {country.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
