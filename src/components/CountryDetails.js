import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


class CountryDetails extends React.Component {
  render() {
  
    let countries = this.props.countries
    let countriesCca3 = this.props.match.params.cca3
    //We look for the country with find, we could also do it with a filter 
    const filteredCountries = countries.find((country) => country.cca3 === countriesCca3) 


 return (

        <div className="col-7">
        <h1>{filteredCountries.name.common}</h1>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{filteredCountries.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{filteredCountries.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
             <ul>
             <li>
                    {filteredCountries.borders.map((theBorder) => {
                       const borderCountries = countries.find((country) => country.cca3 === theBorder)
                      return (
                        <li> 
                          <Link to={`/${borderCountries.cca3}`}><li>{borderCountries.name.common}</li></Link>
                        </li>
                   )
                })
            }
              </li>        
              </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
                  )

 }
}                   

 export default CountryDetails