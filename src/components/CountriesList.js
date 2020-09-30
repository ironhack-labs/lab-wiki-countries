import React from 'react';
import { Link } from 'react-router-dom'

const CountriesList = props => {
    const allCountries = props.countries.map(country => (

        <li className="noDecoration">
            <Link to={`/country/${country.cca3}`} className="list-group-item list-group-item-action">
                <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} className="flag" alt="flag"/>
                {`${country.name.common}`}
            </Link>
        </li>
    ))

    return (
        <div className="col-5">
            <ul className="list-group">
                {allCountries}
            </ul>
        </div>
    )
}

export default CountriesList