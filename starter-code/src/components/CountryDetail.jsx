import React from 'react';
import { Link } from 'react-router-dom';


const CountryDetail = (props) => {
  console.log(props)
  const { params } = props.match;
  const foundCountry = props.countries.find((country) => country.cca3 === params.id)

  const findBorder = (id) => {
    return props.countries.find((country) => country.cca3 === id)
  }

  return (
    <div class="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {foundCountry.borders.map((country, index) => <li key={index}><Link to={`/${country}`}>{findBorder(country).name.common}</Link></li>)}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
    </div>
  )
}
export default CountryDetail;