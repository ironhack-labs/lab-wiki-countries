import React from 'react';
import { Link } from 'react-router-dom'
export default function CountryDetails(props) {
    let getCountry = id => props.location.state.countriesState.find(obj => obj.cca3 === id)
    const { cca3 } = props.match.params
    console.log(props.location, 'hf')
    const foundCountry = getCountry(cca3)
    console.log(foundCountry, 'suisidio')
    return (
        <div>
            <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
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
                    {foundCountry.borders.map((eachCountryBorder, index) => {
                    return (
                        <div key={eachCountryBorder}>
                        <li><Link to={{pathname:`/${eachCountryBorder}`, state:{countriesState: props.location.state.countriesState}}}>{eachCountryBorder}</Link></li>
                        </div>
                    )
                })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
}