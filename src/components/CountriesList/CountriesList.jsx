import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import countriesData from './../../countries.json';

function CountriesList({ countriesData }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesData);
  });

  return (
    <div>
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code} className="project">
            <p>{country.alpha3Code}</p>

            <Link to={`/${country.alpha3Code}`}>Ver detalles</Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
