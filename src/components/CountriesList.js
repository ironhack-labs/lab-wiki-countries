import React from 'react'
import { Link } from 'react-router-dom'

export default function CountriesList(props) {

    console.log(props.country.name.common)
    return (
        <div className="one-country">
            <Link countryList={props.countryList} to={`/${props.country.cca3}`}> <img style={{width: '15px'}} src={`https://www.countryflags.io/${props.country.cca2}/flat/64.png`} /> {props.country.name.common}</Link>
        </div>
    )
}
