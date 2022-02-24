import countriesArr from '../countries.json';
import { useState } from 'react';
import CountryDetails from './CountryDetails';
import { Link } from 'react-router-dom';

export default function CountriesList() {
  const [countries, setCountries] = useState(countriesArr);
  
  return (
    <div className="CountriesList">
      <h2>CountriesList</h2>
      <ul>
        {countries.map((elm) => {
          return (
            <li>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`}
                alt={elm.name.common}
              />
              <Link to={`/countries/${elm.alpha3Code}`} key={elm.alpha2Code}>
                {elm.name.common}
              </Link>

              <CountryDetails
                countryName={elm.name.common}
                alpha2Code={elm.alpha2Code}
                countryId={elm.alpha3Code}
                capital={elm.capital}
                area={elm.area}
                borders={elm.borders?.join(", ")}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
