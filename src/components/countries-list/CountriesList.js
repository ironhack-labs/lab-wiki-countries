import React from 'react'
import './CountriesList.css';

import { Link } from 'react-router-dom'

function CountriesList(props) {

    return (

        <ul className="list-group countries-list">
            {props.countriesDB.map((elm, idx) => {

                return (
                    <li key={idx}>
                        <Link className='list-group-item list-group-item-action' to={`/${elm.cca3}`}>

                            {elm.flag} {elm.name.official}

                        </Link>
                    </li>
                )
            })}

        </ul>
    )
}

export default CountriesList