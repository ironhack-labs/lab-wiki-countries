import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'


export default function CountryDetails(props) {
  function getCountryDetails(countryCode){
     return props.countriesList.find(elm =>{ return elm.cca3 ===countryCode})
  }
  const foundCountry = props.countriesList.find(elm => {return elm.cca3 === props.match.params.countryCode})
  const {capital, area, name } = foundCountry;
  return (<div className="col-7">
  <h1>{name.common}</h1>
  <table className="table">
    <thead></thead>
    <tbody>
      <tr>
        <td style={{width: "30%"}}>Capital</td>
        <td>{capital}</td>
      </tr>
      <tr>
        <td>Area</td>
        <td>{area} km
          <sup>2</sup>
        </td>
      </tr>
      <tr>
        <td>Borders</td>
        <td>
          <ul>
          { foundCountry.borders.length > 0 ?
            foundCountry.borders.map(countryCode => {
            const foundBorder = getCountryDetails(countryCode);

            return <li> <Link to={`/${countryCode}`}>{foundBorder.name.common}</Link></li>
          }) : 'This country has no borders'
          }
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
  )}