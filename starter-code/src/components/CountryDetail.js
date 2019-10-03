import React from "react";
import { countries } from "./CountryList";

const CountryDetail = props => {
  const { id } = props.match.params;

  const actualCountry = countries.find(el => {
    return el.cca3 === id;
  });
  return (
    <div className='col-7'>
      <h1>{actualCountry.name.official}</h1>
      <table className='table'>
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{actualCountry.capital}</td>
          </tr>
          <tr>
            <td>Area [Km2]</td>
            <td>{actualCountry.area}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;