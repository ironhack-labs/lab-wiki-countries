import { Link } from 'react-router-dom';
import React, { Component } from 'react';



const CountriesDetails = (props) => {
  

    const foundCountry = props.countries?.find(elm => elm.cca3 === props.match.params.cca3)



  const getName = (elm) => {
    return props.countries.find(country => country.cca3 === elm).name.common
  }


    return (
      foundCountry ? <div class="col-7">
        <h1>{foundCountry.name?.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{foundCountry.capital}</td>
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
                  {foundCountry.borders?.map(elm => <li><Link key={elm} to={`${elm}`}>{getName(elm)}</Link> </li>)}

                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div> : null

    )



  
}

export default CountriesDetails