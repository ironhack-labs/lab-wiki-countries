import React, { Component } from 'react'
import countries from '../../countries.json'
import { Link } from 'react-router-dom'

class CountriesList extends Component {

    state = {
        countries: countries
    }

    displayCountries = () => {
        console.log(this.state.countries)

        return this.state.countries.map((country, idx) => {

            return (
                <li className="list-group-item" key={`${idx}-$
                    {country.name.common}`}>
                    <Link to={`/${country.cca3}`} className="text-decoration-none text-dark">
                        {country.flag}
                        {country.name.common}
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="container">

                <ul className="list-countries list-group p-5">
                    {this.displayCountries()}
                </ul>
            </div>
        )
    }
}

export default CountriesList
