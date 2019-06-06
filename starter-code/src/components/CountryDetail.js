import React from 'react';
import countries from '../countries.json'
import { Link } from 'react-router-dom'

const countryDetails = (props) => {
    console.log(props)
    const getCountry = (cca3) => {
        const country = oneCountry => {
            return oneCountry.cca3 === cca3;
        }
        return countries.find(country)
    }
    const getCountryName = (cca3) => {
      const country = oneCountry => {
          return oneCountry.cca3 === cca3;
      }
      const borderCountry = countries.find(country)
      return borderCountry.name.common
  }

    const foundCountry = getCountry(props.match.params.id)  
    console.log(foundCountry)
    return (
      <div class="col-7">
        <h1>{foundCountry.name.common} ({foundCountry.name.official})</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td class="capital">Capital</td>
              <td>{foundCountry.capital}</td>
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
                  {/* {foundCountry.borders.map((border, i) => <li><Link key={border} to={`/country/${border}`}>{border}</Link></li>)} */}
                  {foundCountry.borders.map((border, i) => {
                    let country = getCountryName(border)
                    return <li><Link key={border} to={`/country/${border}`}>{country}</Link></li>
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      )
    }



export default countryDetails;
