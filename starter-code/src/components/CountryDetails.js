import React from "react";
import { Link } from "react-router-dom";
 import countries from '../countries.json';

const CountryDetails = (props) => {
  const { params } = props.match;

  const getCountry = (id) => {
    return countries.find(country => country.cca3 === id)
  };

  const countrySelected = getCountry(params.id)
  return (
    <>
    <h1>{countrySelected.name.official}</h1>
     <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style={{width: "30%"}}>Capital</td>
          <td>{countrySelected.capital}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>
            {countrySelected.area} km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
                {
                  countrySelected.borders.map((item,idx) => (
                <li>
                    <Link  to={`/${item}`} key={idx}>{getCountry(item).name.official}</Link>
               </li>
                  ))
                }
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </>
  )
};

export default CountryDetails;
