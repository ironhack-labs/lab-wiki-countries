import countriesJson from '../countries.json';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CountriesList() {
  console.log(countriesJson);

  const [countries, setCountries] = useState(countriesJson);
  return (
    <div>
      {countries.map((country) => {
        return <p>{country.alpha3Code}</p>;
      })}
    </div>
  );
}

export default CountriesList;
