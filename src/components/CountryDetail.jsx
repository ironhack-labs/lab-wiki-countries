import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryDetail(props) {
    if(props.match === null) {
        return (
            <div className="col-7">
                <p className="text-center">Select a country</p>
            </div>)
    } else {
        const cca3 = props.match.params.cca3 || 'AUS';
        const country = props.countries.find((country) => country.cca3 === cca3) || {};
        return ( 
        <div className="col-7 text-left">
            <h1>{country.name.common}</h1>
              <table className="table text-left">
                <thead></thead>
                <tbody>
                  <tr>
                    <td styleName={{width: "30%"}}>Capital</td>
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
                        {country.borders.map((borderCountry, index) => (
                            <li key={index}>
                                <Link className="" to={"/" + borderCountry}>
                                        {(props.countries.find((country) => country.cca3 === borderCountry)).name.common}
                                </Link>
                            </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
        </div>)
    }
}
