import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CountryDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: props.Countries,
        }
    }

    render() {
        let { params } = this.props.match
        let country = this.state.countries.find(country => country.cca3 === params.id)
        let countryBorders = country.borders.map(border => this.state.countries.find(country => country.cca3 === border && country))

        return (
            <>
                <div class="col-7">
                    <h1 className="country">{country.name.common}</h1>
                </div>
                <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{country.area} km²<sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {countryBorders.map(border => {
                                        return (<li><Link to={`/country-detail/${border.cca3}`}>{border.flag} {border.name.common}</Link></li>)
                                    })
                                    }
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default CountryDetail