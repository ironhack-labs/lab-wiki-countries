import React from 'react';
import { Link } from 'react-router-dom'
import countries from '../countries.json'

const CountryDetails = (props) => {

    const { id } = props.match.params
    let filteredCountry = countries.find(elem => elem.cca3 === id)
    const format = { width: "30%", listStyleType: "none"}

    return (
        <div className="col-7">
            <h1>{filteredCountry.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={format}>Capital</td>
                  <td>{filteredCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {filteredCountry.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul style={format}>
                    {filteredCountry.borders?.map(border => {
                        return <li><Link key={border} to={`/country/${border}`}>
                            {border}
                        </Link></li>
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