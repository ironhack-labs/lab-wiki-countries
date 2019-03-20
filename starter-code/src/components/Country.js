import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom';

export default function Country(props) {

  const getCountry = id => {
    const theCountry = oneCountry => {
        return oneCountry.cca3 === id;
    }
    return countries.find(theCountry)
};

  const foundCountry = getCountry(props.match.params.id)

  let bordercountries = countries.filter(elm=>{
    return foundCountry.borders.includes(elm.cca3)
  })

  return (
    <div class="col-7">
    <h1>{foundCountry.name.common}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style={{width: `30%`}}>Capital</td>
          <td>{foundCountry.capital[0]}</td>
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
              {
                bordercountries.map((elm,ind)=><li><Link key={ind} to={`/${elm.cca3}`}>{elm.flag} - {elm.name.common}</Link></li>)
              }
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}
