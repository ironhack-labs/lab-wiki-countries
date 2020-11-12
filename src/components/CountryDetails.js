import React from 'react';
import CountryList from '../components/CountriesList';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryDetails = (props) => {
  // console.log(props);
  // El cca3 está dentro de props.match.params.cca3
  const { params } = props.match;

  const findCountry = (cca3) => countries.find((obj) => obj.cca3 === cca3);
  // console.log(findCountry)

  const foundCountry = findCountry(params.cca3);

  return (
    <div >
      {/* <div >
        <CountryList />
      </div> */}
      <div >
        <h1>{foundCountry.name.common}</h1>
        <h4>Capital: {foundCountry.capital} </h4>
        <h4>Area: {foundCountry.area} Km2</h4>
        <h4>Borders:</h4>
        <ul>
          {/* Hacer un ternario para que cada border lo busque y nos traiga el nombre del país */}
          {foundCountry.borders &&
            foundCountry.borders.map((cca3, index) => {
              return (
                <li key={cca3}>
                  {' '}
                  <Link to={`/${cca3}`}>
                    {' '}
                    {findCountry(cca3).name.common}{' '}
                  </Link>{' '}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default CountryDetails;
