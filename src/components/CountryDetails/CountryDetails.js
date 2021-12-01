import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  let getBordersName = (arrayBorders) => {
    return arrayBorders.map((eachBorder) => {
      return props.allCountries.find(
        (eachCountry) => eachCountry.cca3 === eachBorder
      );
    });
  };

  return (
    <div>
      <h1>CountryDetails</h1>
      <h2>{props.country[0].name.official}</h2>
      <div>
        <p>Capital: </p>
        <p>{props.country[0].capital[0]}</p>
      </div>
      <div>
        <p>Area: </p>
        <p>{props.country[0].area}</p>
      </div>
      <div>
        <p>Borders</p>
        <ul>
          {getBordersName(props.country[0].borders).map((elm) => {
            return (
              <Link to={`/countries/${elm.cca3}`}>
                <li>{elm.name.official}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CountryDetails;
