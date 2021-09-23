import React from 'react'
import countries from '../../countries.json'
import { Link } from 'react-router-dom';



export default function CountryDetails(props) {
  const { countryCca3 } = props.match.params;
  const foundCountry = countries.find(country => country.cca3 === countryCca3);  
 
 
    return (
       <div>
       {
        foundCountry && 
                <div class="col-7">
                <h1>{foundCountry.name.common}</h1>
                <table class="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td style={{width:"30%"}}>Capital</td>
                      <td>{foundCountry.capital}</td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td>
                      {foundCountry.area}
                        <sup>2</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>Borders</td>
                      {
                        
                      }
                      </tr>
                  </tbody>
                </table>
              </div> 
       }

            
      </div>
    )
}
