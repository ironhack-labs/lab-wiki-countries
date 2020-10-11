import React from 'react';
import countries from  '../countries.json';
import './Style.css'
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  console.log(props);
  const {countryName} = props.match.params;
  const country = countries.filter(country => country.name.official === countryName)[0]
  console.log(country.borders)
  const bordersCountries = countries.filter(c => country.borders.includes(c.cca3))

  console.log('borders => ', bordersCountries)

  return (
    <div className='info'>
      <article>
        <p className="title">{country.name.official}</p>
        <div className="info-country">
          <div>Capital:</div>
          <div>{country.capital}</div>
          <div>Area:</div>
          <div>{country.area}</div>
          <div>Borders:</div>
          <ul className="list-group">
            {bordersCountries.map((bordersCountry) => (
              <li className="borders-country" key={bordersCountry.cca2}>
                <Link to={`/country-details/${bordersCountry.name.official}`}>{bordersCountry.name.official}</Link>
              </li>
            ))}
          </ul>
        </div>
      </article>

    </div>
  );
}

export default CountryDetails;