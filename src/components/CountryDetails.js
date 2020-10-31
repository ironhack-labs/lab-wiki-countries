import React from 'react';
import {  Link } from 'react-router-dom';


export default function CountryDetails(props) {
  if (props.data.length < 1) {
    return <h3>Loading...</h3>
  }
 
  const test = props.data.filter(item => {
    return item.cca3 === props.match.params.id
  })
  //console.log(test[0].borders)
  let bordersArr
  if (test) {
    bordersArr = [...test[0].borders]
  }
 // const bordersArr = [...test[0].borders]
  const bordersCountries = bordersArr.map(countryCode => {
   // console.log(countryCode)
    return props.data.find(country => {
      return countryCode === country.cca3
    })
  })
 // console.log(bordersCountries)
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
                {bordersCountries.map(bordersData => {
                  //console.log(bordersData)
                  return <li><Link to={bordersData.cca3} key={bordersData.name.official}>{bordersData.name.official}</Link></li>
                })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


