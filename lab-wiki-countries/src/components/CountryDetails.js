import React from 'react'
import { Link } from 'react-router-dom'
import countries from './../countries.json'


const CountryDetails = props => {
    const country = countries.find((elm) => elm.cca3 === props.match.params.cca3)
// console.log(props.match.params.cca3)
    // console.log(country)
    return (
        <div className="col-7">
          <h1> {country.name.official}</h1>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td> {country.area}</td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                                {country.borders.map((elm, idx) => {
                                    const border = countries.find((element) => element.cca3 === elm)
                                    return (
                                        <li key={idx}>
                                            <Link to={border.cca3}>{border.name.official}</Link>
                                        </li>
                                    )
                                })
                                };
                    
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


    )
}





export default CountryDetails