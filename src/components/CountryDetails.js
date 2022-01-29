import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails(props) {
  const { id } = useParams();
  const country = props.data.filter((country) => country.alpha3Code === id)[0];
  //   console.log(country)
  const countryFlag =
    'https://flagpedia.net/data/flags/icon/72x54/' +
    country.alpha2Code.toLowerCase() +
    '.png';
  const borderCountry = (alpha3) => {
    const newCountry = props.data.filter(
      (country) => country.alpha3Code === alpha3
    )[0];
    return <div key={alpha3}><Link to={newCountry.alpha3Code}>{newCountry.name.common}</Link>;</div>
  };
  return (
    <div>
      <div>
        <img
          style={{ width: '80px' }}
          src={countryFlag}
          alt={country.alpha2Code}
        />
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area} km²</p>
        Borders:{country.borders.map((countryA3) => borderCountry(countryA3))}
      </div>
    </div>
  );
}

export default CountryDetails;
