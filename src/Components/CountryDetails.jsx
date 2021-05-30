import React from 'react';
import countriesJSON from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = () => {
  const cca3 = this.props.match.params;
  const foundCountry = countriesJSON.find((country) => country.cca3 === cca3);

  return (
    <div>
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead>
        <tbody>
        <tr>
          <td>Capital</td>
          <td>{foundCountry.capital[0]}</td>
        </tr>
        <td>Area</td>
        <td>{foundCountry.area}</td>
       
       </tbody> 
       </thead> 
       </table>
    </div>
  );
};

export default CountryDetails;
