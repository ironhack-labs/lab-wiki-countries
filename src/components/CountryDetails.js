import React from 'react'
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const cca3 = props.match.params.cca3
  let country; 
  props.countriesList.forEach((eachCountry) => {
    if (eachCountry.cca3 === cca3){
      country = eachCountry
    }
  })
  const {name, capital, area, borders} = country

  return (
    <div className="col-7">
      <h1>{name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{width: '30%'}}>Capital</td>
                <td>{capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                  {
                    borders.map((borderCountry) => {
                      return (
                        <li key={borderCountry}>
                        <Link to={`/${borderCountry}`}>
                          {
                            props.countriesList.map((country, i) => {
                              if(country.cca3 === borderCountry){
                                return (
                                  <span key={i}>{country.name.common}</span>
                                )
                              }
                            })
                          }
                        </Link>
                        </li>
                      )
                    })
                  }
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
    </div>
  )
}

export default CountryDetails
