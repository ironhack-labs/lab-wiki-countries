import { useState } from 'react';
import { Link } from 'react-router-dom';
import countriesFromJson from '../countries.json';


const CountriesList = () => {
  const [countries, setCountries] = useState(countriesFromJson);

  const countriesLinks = countries.map(country => {
    return <Link key={country.alpha3Code} to={country.alpha3Code} className="list-group-item list-group-item-action">
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country.name.official" style={{height: `1rem`}}/>
      <span> </span>
      {country.name.official}
    </Link>
  });

  return (
    <div className="list-group">
      {countriesLinks}
    </div>
  )
}

export default CountriesList;