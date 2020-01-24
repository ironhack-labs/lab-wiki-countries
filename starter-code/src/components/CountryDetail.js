import React from 'react'
import Data from '../../src/countries'
import { Link } from 'react-router-dom'

const CountryDetails = (props) => {
    const path = props.match.params.country
    const filter = [...Data].filter(el => el.cca3===path)
    const country = filter[0]
    const borders = [...Data].filter( e => (country.borders.includes(e.cca3))).map( (el,i) => <li key={i}><Link to={`/${el}`}>{el.name.common}</Link></li>)
    return (
        <div className="col col-6">
            <div className="CountryDetail">
                <h3>{country.name.common}</h3>
                    <hr/>
                <p>Capital: {country.capital}</p>
                    <hr/>
                <p>Area: {country.area}km2</p>
                    <hr/>
                <div className="row">
                    <div className="col col-6">
                        Borders:
                    </div>
                    <div className="col col-6">
                        <ul>{borders}</ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CountryDetails