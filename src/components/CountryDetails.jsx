import React from 'react';

const CountryDetails = (props) => {
  console.log(typeof props.country.borders);

  return (
    <div>
      <h1>{props.country.name.common}</h1>
      <p>Capital: {props.country.capital}</p>
      <p>
        Area: {props.country.area} km<sup>2</sup>
      </p>
      {props.country.borders.map((border, index) => {
        return <li key={index}>{border}</li>;
      })}
    </div>
  );
};

export default CountryDetails;
