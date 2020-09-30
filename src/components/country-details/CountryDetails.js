import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class CountryDetails extends Component {

    constructor() {

        super()
        this.country = {}
    }

    // Returns an array with the object matching the cca3 code
    matchCountry = (cca3) => this.props.countriesDB.filter(elm => elm.cca3 === cca3)

    render() {

        this.country = this.matchCountry(this.props.match.params.cca3)[0]

        return (

            <>

                <h1>{this.country.name.common}</h1>

                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{this.country.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{this.country.area} km
                        <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {this.country.borders.map((elm, idx) => {

                                        return (
                                            <li key={idx}>
                                                <Link to={`/${elm}`}>

                                                    {this.matchCountry(elm)[0].name.common}

                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </>
        )
    }


}

export default CountryDetails