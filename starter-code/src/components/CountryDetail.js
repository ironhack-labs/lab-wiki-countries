import React from 'react';
import countries from './../countries.json'
import {Link} from 'react-router-dom'

const CountryDetail = (props) => {
    const country = countries.find(e => e.cca3 === props.match.params.cca3)

    return (
    <React.Fragment>  
      <div class="container">
        <div class="row">
          <div class="col-7">
            <h1>{country.name.official}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>{country.area}</td>km
                    <sup>2</sup>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                  <ul>
                    {country.borders.map((cca3,i)=>{
                    const pais = countries.find(e => e.cca3 === cca3)
                    return (
                        <li key={i}><Link to={`/country/${cca3}`}>{pais.name.common}</Link></li>
                    )
                    })}
                </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
 </React.Fragment>
 )
}

export default CountryDetail

