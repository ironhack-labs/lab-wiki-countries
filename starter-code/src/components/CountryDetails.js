import React from 'react'
import { Link } from 'react-router-dom';
import countries from '../countries.json'
import './CountryDetail.css'

export default function CountryDetails(props) {

        const { params:{id} } = props.match;
       const country = countries.filter(country => country.area.toString() === id)[0]
    console.log("Output for: CountryDetails -> country", country)
    const borders = country.borders
    const neighborCountries = countries.filter(country => borders.includes(country.cca3))
    console.log("Output for: CountryDetails -> neighborCountries", neighborCountries)

    return (
        <div>
            <h2>{country.name.common}</h2>
            <div className='countries'>
                <div className="country-det"><h5><b>Capital</b>: </h5><h5>{country.capital}</h5></div>
                <div className="country-det"><h5><b>Area</b>: </h5><h5>{country.area} km^2</h5></div>
                <div className="country-det"><h5><b>Borders</b>:</h5>
                    <ul>
                        { neighborCountries.map(neighbor => <li key={neighbor.name.common}> <h5><Link to={`/country/${neighbor.area}`}>{neighbor.name.common}</Link></h5> </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}
