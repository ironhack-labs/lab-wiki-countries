import React, { Component } from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'
class CountryDetail extends Component {

    state = {
        id: ''
    }
    render() {
        const { id } = this.props.match.params
        const selectedCountry = countries.find(country => country.cca3 === id)
        return (
            <>
                <h2>{selectedCountry.name.common}</h2>
                <div>
                    <p><strong>Capital: </strong>{selectedCountry.capital}</p>
                    <p><strong>Area: </strong>{selectedCountry.area} km²</p>
                    <hr />
                    <p><strong>Borders: </strong></p>
                    <ul>
                        {selectedCountry.borders.map((border, index) => {
                            return (
                                <li key={index}>
                                    <Link to={border}>{border}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </>
        )
    }
}

export default CountryDetail
