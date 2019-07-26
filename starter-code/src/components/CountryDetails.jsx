import React, { Component } from 'react';
import countries from '../countries.json'

const CountryDetails = (props) => {

  const getCountry = (cca3) => {
    const country = oneCountry => {
      return oneCountry.cca3 === cca3;
    }
    return countries.find(country)
  };

  const { params } = props.match;
  const foundCountry = getCountry(params.cca3, 10);

  return (
    <div>
      <h2>
        <table>
          <caption>{foundCountry.name.common}</caption>
          <tr>
            <td><p>Capital</p></td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td><p>Area</p></td>
            <td>{foundCountry.area}</td>
          </tr>
          <tr>
            <td><p>Borders</p></td>
            <td>{foundCountry.borders.map((country, index) => {
              return <p key={index}>{country}</p>
            })}</td>
          </tr>
        </table>
      </h2>
    </div>
  )
}

export default CountryDetails;


// { foundCountry.name.common }
// <p>Capital</p>
// { foundCountry.capital }
// <p>Area</p>
// { foundCountry.area }
// <p>Borders</p>
// {
//   foundCountry.borders.map((country, index) => {
//     return <p key={index}>{country}</p>
//   })
// }