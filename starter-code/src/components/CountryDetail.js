import React from 'react';
import Countries from '../countries.json'
import { Link } from 'react-router-dom';
import queryString from 'query-string'



const countryDetails = (props) => {
  console.log(props.match.params.id)
  let id = props.match.params.id
  //const values = queryString.parse(props.location.search)
  // este es el query string que le pasamos ?place=Barcelona&destType=hotel"
  const getCountry = (id) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === id;
    }
    return Countries.find(theCountry)
  };
  
  const { params } = props.match;  /// </---- ahi estan los params props.match
  const foundCountry = getCountry(id);
  console.log(foundCountry)
   

  return (
    <div class="col-7">
    <h1>{foundCountry.name.common}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td >Capital</td>
          <td>Paris</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>551695 km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              {foundCountry.borders}
              {/* <li><a href="/AND">Andorra</a></li>
              <li><a href="/BEL">Belgium</a></li>
              <li><a href="/DEU">Germany</a></li>
              <li><a href="/ITA">Italy</a></li>
              <li><a href="/LUX">Luxembourg</a></li>
              <li><a href="/MCO">Monaco</a></li>
              <li><a href="/ESP">Spain</a></li>
              <li><a href="/CHE">Switzerland</a></li> */}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default countryDetails;