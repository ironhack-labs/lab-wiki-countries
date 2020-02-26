import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CountryDetail extends Component {
    constructor(props) {
        super()
        this.state = {
            countries: props.countries
        }
    }
    render() {
        let { params } = this.props.match
        let country = this.state.countries.find(country => country.cca3 === params.id)
        console.log(country)
        let countryBorders = country.borders.map(border => this.state.countries.find(country => country.cca3 === border && country))
        return (
            <div className="d-flex flex-column align-items-start">
                <h2>{country.name.common}</h2>
                <div >
                    <p>Capital: {country.capital[0]} </p>
                </div>
                <div>
                    <p>Area: {country.area} km² </p>

                </div>
                <div>
                    <p>Borders:</p>
                    <ul>
                        {countryBorders.map(border => {
                            return (
                                <li key={border.cca3}>
                                    <Link to={`/${border.cca3}`}>{border.name.common}</Link>
                                </li>
                            )
                        }
                        )}
                    </ul>

                </div>
            </div>
        )
    }
}

export default CountryDetail