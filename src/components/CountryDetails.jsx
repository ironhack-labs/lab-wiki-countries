import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'


export default function CountryDetails(props) {


  const getCountry = (cca3) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3;
    }
    return countries.find(theCountry)
  };

  const country = getCountry(props.match.params.cca3)

    return (
      <div class="col-7">
          <h1>{country.name.common}</h1>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{width: '30%'}}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((borderCountry, index) => {
                      return (
                        <li key={index}>
                          <Link 
                          to={`/${borderCountry}`}
                          >
                          {borderCountry}
                          </Link>
                        </li>
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


