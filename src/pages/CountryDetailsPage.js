import React from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';

const myCountries = countries;

function CountryDetailsPage(props) {
  console.log('props :>> ', props);
  console.log('props.match.params.id :>> ', props.match.params.id);

  // Get the id from props.match.params.id
  const countryId = props.match.params.cca3;

  // Find the exact Country by looping over myCountries array
  const foundCountry = myCountries.find(
    (Country) => countryId === Country.cca3
  );

  const borderCountries = foundCountry.borders

  const borderCountriesArr = borderCountries.map((bCountry)=>{
      return myCountries.find((country)=>{
        return country.cca3 === bCountry
      })
  })


  console.log('foundCountry :>> ', foundCountry);

  return (
    <div>
      <h1>{foundCountry.name.commons}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km2
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borderCountriesArr.map((borderC) => {
                  return (<li>{borderC.name.common} {borderC.flag}</li>)
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetailsPage;
