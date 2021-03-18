import React from 'react'

import countriesJSON from './../countries.json';
import {Link} from 'react-router-dom';

const CountryDetails = (props) => {
    console.log(props)

    const getCountry = (cca3) => {
        const theCountry = oneCountry => {
            return oneCountry.cca3 === cca3;
        } 
        return countriesJSON.find(theCountry)
    };

    const { params } = props.match;
    const foundCountry = getCountry(params.cca3, 10)

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
                  <td>
                    {foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>

                    {foundCountry.borders.map((eachcca3, index) => {
                return(
                    <div key={eachcca3}>
                        <li>
                    <Link to={`/countries/${eachcca3}`} 
                   
                     >{getCountry(eachcca3).name.common}</Link>

                        </li>
                    </div>
                    )
                    })}
                       
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
            
       
    )
}

export default CountryDetails
