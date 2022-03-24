import React from 'react';
import { useState, useEffect } from 'react';

export const CountriesList = (props) => {
  const countries = props.props;
  //   console.log(props.props);
  if (!countries) return <p>Loading...</p>;

  return (
    <div
      className="text-start"
      style={{ paddingLeft: '100px', width: '50%', marginTop: '25px' }}
    >
      {countries.map((country) => {
        return <p key={country.alpha3Code}>{country.name.common}</p>;
      })}
    </div>
  );
};
