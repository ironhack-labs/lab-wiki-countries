
import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json'

function countryDetails(props) {

  const { params } = props.match;
  const countryCCA3 = params.countryId;
  const country = countries.find(country => country.cca3 === countryCCA3);

  const [BordersCountry] = countries.filter(country => country.cca3 === countryCCA3)
  console.log(BordersCountry)


  return (
    <div>
      <h1> {country.name.official}</h1>
      <h2>Country details</h2>
      <p>Capital:{country.capital}</p>
      <p>Area:{country.area}km2</p>
      <td>
        <ul>
          {country.borders.map((b, k) => {
            return (
              <li key={k}>
                <Link to={country.cca3}>{b}</Link>
              </li>
            );
          })}
        </ul>
      </td>

    </div>
  )
}

export default countryDetails;

