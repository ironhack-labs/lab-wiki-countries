import React from 'react'
import countries from './../countries.json'
import { Link } from 'react-router-dom'

const CountryDetail = (props) => {
    //console.log(props)
    let getCountry = (cca3) => countries.find((obj) => obj.cca3 === cca3);

    const { params } = props.match

    const foundCountry = getCountry(params.cca3)

    let bordersArr = foundCountry.borders;

    let bordersNew = bordersArr
    .map((code) => countries.find((country) => code === country.cca3))
    .map((elem, i) => {
        return 
    })

    console.log(foundCountry)
    return (
        <div>
            <h2>{foundCountry.name.common}</h2>
            <h3>Capital: {foundCountry.capital}</h3>
            <h3>Area: {foundCountry.area} km2</h3>
            <h3>Borders:
                <ul>
                    {bordersArr
                    .map((code) => countries.find((country) => code === country.cca3))
                    .map((elem, i) => {
                        return (<li key={i}><Link to={`/${elem.cca3}`}>{elem.name.common}</Link></li>)
                    })}
                </ul>
            </h3>
        </div>
    )
}

export default CountryDetail
