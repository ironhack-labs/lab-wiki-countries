import React, { useState } from 'react'
import countries from '../countries.json'

const CountryDetails = props => {
    const [country, setCountry] = useState([...countries].filter((country, index) => country.cca3 = props.match.params.cca3)[0])
    return (
        <div style={{ margin: '65px 0 0 320px', position: 'fixed', top: 0, left: 0 }}>
            <h1>{country.name.official}</h1>
        </div>
    )
}

export default CountryDetails
