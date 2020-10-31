import React from 'react'
import {Link} from 'react-router-dom'

export default function CountryDetails(props) {
    const {cca3} = props.match.params
    const selectedCountry = props.countries.find((country) => {
        return country.cca3 === cca3
    })
    // console.log(selectedCountry)

    return (
        <div className="col-7">
            <h1>{selectedCountry.name.common}</h1>
                <table className="table">
                    <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{width: "30%"}}>Capital</td>
                                <td>{selectedCountry.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>{selectedCountry.area} km
                                    <sup>2</sup>
                                </td>
                                </tr>
                                <tr>
                                    <td>Borders</td>
                                    <td>
                                        <ul>
                                            {selectedCountry.borders.map((borderCountry) => { // borderCountry is cca3
                                                return(
                                                    <li key={borderCountry}>
                                                    <Link to={`/${borderCountry}`}>
                                                        {props.countries.map((country) => {
                                                            if(country.cca3 === borderCountry) {
                                                                return (
                                                                    <span key={country.cca3}>
                                                                    {country.name.common}
                                                                    </span>
                                                                )
                                                            };
                                                            return null
                                                        })}
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
