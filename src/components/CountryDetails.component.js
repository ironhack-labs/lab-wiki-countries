import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import './CountryDetails.css';

function CountryDetailsComponent(props) {
  let { cca3 } = useParams();
  const country = props.getCountry(cca3);

  return (
    <div className="country-details">
      <h3 className="h3">{country.name.common}</h3>
      <hr></hr>
      <p>{`Capital: ${country.capital}`}</p>
      <p>{`Area: ${country.area}`}</p>
      <div>
        <p>{`Borders: ${country.borders}`}</p>
      </div>
    </div>
  );
}

export default CountryDetailsComponent;
