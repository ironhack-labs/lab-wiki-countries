import React from 'react'
import { Link } from 'react-router-dom'
import countries from '../countries'


export default function CountryDetail (props) {

    let country = countries.filter((country)=>{
        return country.cca3 === props.match.params.id
     })[0]

        return (
                                                
          <div class="col-7">
            <h1>{country.name.official}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width:'30%'}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{`${country.area}km`}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  
                  {
                    <td><p>Borders:</p> {country.borders.map((elem)=>{
                        return <p><Link to={`/countries/${elem}`}>{elem}</Link></p>
                    })}</td>
                }
                </tr>
              </tbody>
            </table>
          </div>
                                                          
        )
    
}