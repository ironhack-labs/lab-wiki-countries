import React, { useState, useEffect } from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
const { Title } = Typography

const CountryDetails = ({ match: { params: { cca3 } } }) => {
    function getCountry(code) {
        return [...countries].filter(country => country.cca3 === code)[0]
    }

    const [country, setCountry] = useState(getCountry(cca3))

    useEffect(() => {
        setCountry(getCountry(cca3))
    }, [cca3, country])

    return (
        <div style={{ margin: '75px 0 0 320px', position: 'fixed', top: 0, left: 0, width: 'calc(98% - 320px)' }}>
            <Title level={1}>{country.name.official}</Title>
            <hr />
            <Title level={5}>Capital: {country.capital}</Title>
            <hr />
            <p>Area: {country.area} km²</p>
            <hr />
            <p>Border:</p>
            <ul>
                {country.borders.map((code, index) => <Link to={`/${code}`}><li key={index}>{getCountry(code).name.official}</li></Link>)}
            </ul>
        </div>
    )
}

export default CountryDetails
