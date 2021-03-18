import React from 'react';
import countriesJSON from './../countries.json';
import { Link } from "react-router-dom";

 const CountryDetails = (props) =>{
  const countryName = props.match.params.cca3;
  const foundCountry = countriesJSON.find(
    (country) => country.cca3 === countryName
  );

  return (
  <div>
      <div className="col-7">
          <h1>{foundCountry.name.common}</h1>
          <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td styles="width: 30%">Capital</td>
                  <td>{foundCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND"></a></li>
                     
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>

  </div>);
};

export default CountryDetails;
