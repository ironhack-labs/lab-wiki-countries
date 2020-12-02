import React from 'react'
import { Link } from 'react-router-dom'
import countries from './.././countries.json'


const CountriesList = () => {

    return (
        <div className="container country-box">
        <div className="col-5">
            <ul className="list-group">
                {countries.slice(0, 15).map((elm, idx) => (
                    <li class="list-group-item" key={idx}>
                        <Link className="country-name" to={`/countries/${elm.cca3}`}>{elm.name.common}</Link>
                    </li>

                ))}
                </ul>
            </div>
        </div>
    )

}

export default CountriesList
