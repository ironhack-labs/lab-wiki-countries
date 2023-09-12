import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CountryDetails(props) {
    const countryId = useParams()

    const pageCountry = props.countries.find(country => {
        return country.alpha3Code === countryId.id;
    })

    function alphaCodeMatcher(code) {
        const match = props.countries.find(country => {
            return country.alpha3Code === code
        })
        return match.name.common
    }

  return (
    <div className="col-7">
            <h1>{pageCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{pageCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {pageCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {pageCountry.borders.map(border => {
                        return (
                            <li><a href={`/${border}`} style={{textDecoration: 'none'}}>{alphaCodeMatcher(border)}</a></li>
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