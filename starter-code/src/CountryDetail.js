import React, { Component } from 'react'
import countrydata from './countries.json'
import {Link} from 'react-router-dom'

export default class CountryDetail extends Component {
    state = {
        country: countrydata
    }

    render() {
        let country = this.state.country.find(el=>el.cca3 === this.props.match.params.id)
        return (
            <div className='details'>
                <div className='country-name'>
                    <h1>{country.name.common}</h1>
                </div>
                <div className='country-capital country-info'>
                    <h3>Capital</h3>
                    <h3>{country.capital}</h3>
                </div>
                <div className='country-area country-info'>
                    <h3>Area</h3>
                    <h3>{country.area} sq. km</h3>
                </div>
                <div className='country-borders country-info'>
                    <h3>Borders</h3>
                    <div className='border-list'>
                    {
                        country.borders.map(bordercca3 => {
                        let borderCountry = countrydata.find(el=>el.cca3 === bordercca3).name.common
                            return (
                                <Link to={`${bordercca3}`}>{borderCountry}</Link>
                            )
                        })
                    }
                    </div>
                </div>

            </div>
        )
    }
}
