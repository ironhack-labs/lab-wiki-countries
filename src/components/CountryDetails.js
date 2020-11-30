import React from 'react';
import data from '../countries.json';

function CountryDetails(props) {
  const getCountry = (cca3) => {
    const theCountry = (oneCountry) => {
      return oneCountry.cca3 === cca3;
    };
    return data.find(theCountry);
  };

  const { params } = props.match;
  const foundCountry = getCountry(params.cca3, 10);

  return (
    <div>
      <h2>{foundCountry.name.common}</h2>
      <ul>
        <li>Capital: {foundCountry.capital[0]}</li>
        <li>Area: {foundCountry.area} km2</li>
        <li>
          Borders:
          <ul>
            {foundCountry.borders.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default CountryDetails;
