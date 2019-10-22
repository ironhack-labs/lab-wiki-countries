import React, { Fragment } from "react";
import countries from './countries.json';
import { Link } from "react-router-dom";

const CountryDetail = (props) => {
  const { id } = props.match.params;

  const getCountry = (id) => {
    return countries.find(country => country.cca3 === id)
  }

  const countryOption = getCountry(id)

  return (
    <Fragment>
      <h1 className="text-left">{countryOption.name.common}</h1>
      <table className="table">
          <thead></thead>
          <tbody>
              <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{countryOption.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {countryOption.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                      {
                      countryOption.borders.map((element,idx) => (
                        <li key={idx}>
                            <Link to={`/${element}`}>{getCountry(element).name.common}</Link>
                        </li>
                      ))
                      }
                  </ul>
                </td>
              </tr>
            </tbody>
        </table>
    </Fragment>
  )
};

export default CountryDetail;