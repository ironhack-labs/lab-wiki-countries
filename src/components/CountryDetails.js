import React from 'react';
import { Route, Link } from 'react-router-dom';
import CountriesList from './CountriesList';

export default function CountryDetails(props) {
 
  const test = props.data.filter(item => {
    return item.cca3 === props.match.params.id
  })
  console.log(test[0].borders)

/*   const borders = props.data.filter(item => {

    item.borders.map(item2 => {
      return item2 === item.cca3
    })
    console.log(item.borders)
    console.log(item.cca3)
    
  }) */
 // console.log(borders)

  const bordersArr = [...test[0].borders]
  const bordersCountries = bordersArr.map(countryCode => {
    console.log(countryCode)
    return props.data.find(country => {
      return countryCode === country.cca3
    })
  })
  console.log(bordersCountries)

  
  return (
    <div>
      <div className="col-7">
        <h1>{test[0].name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30"}}>Capital</td>
              <td>{test[0].capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {test[0].area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li>
                    <a href="/AND">{}</a>
                  </li>
                  <li>
                    <a href="/BEL">Belgium</a>
                  </li>
                  <li>
                    <a href="/DEU">Germany</a>
                  </li>
                  <li>
                    <a href="/ITA">Italy</a>
                  </li>
                  <li>
                    <a href="/LUX">Luxembourg</a>
                  </li>
                  <li>
                    <a href="/MCO">Monaco</a>
                  </li>
                  <li>
                    <a href="/ESP">Spain</a>
                  </li>
                  <li>
                    <a href="/CHE">Switzerland</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
