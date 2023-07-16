import React from 'react'
import Countries from '../countries.json'
import { useParams, Link } from 'react-router-dom'

export default function CountryDetails() {

  const { countryCode } = useParams();



    // Method .find() returns the first found matching element,
  // or `null` if no matching element is found.
  const foundCountry = Countries.find((country) => {   //  <== ADD
    return country.alpha3Code === countryCode;
  });

  const foundCountryBordersArr = foundCountry.borders;

  const displayBorders = () => {
    return foundCountryBordersArr.map((border, i) => {
      return (
        <li key={i}>
          <Link to={`/${border}`}>{border}</Link>
        </li>
      );
    });
  };
  

  console.log(foundCountry);

  return (
      <div className="col-7">
        <h1>{foundCountry.name.common}</h1>

        
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
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
                  {displayBorders()}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}
