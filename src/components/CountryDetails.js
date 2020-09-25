import React from 'react';
import countries from '../countries.json';
import './CountryDetails.css';
import { Link } from 'react-router-dom'


export default function CountryDetails(props) {
    let country = countries[props.match.params.id]
    console.log(country);
    return (
        <div className='container'>

            <h2>Country Details</h2>
            <h1>{country.name.official}</h1>
            <div className='row' >
                <div className="col-sm">Capital</div>
                <div className="col-sm">{country.capital}</div>
            </div>
            <div className='row' >
                <div className="col-sm">Area</div>
                <div className="col-sm">{country.area} km² </div>
            </div>
            <div className='row' >
                <div className="col-sm">Borders</div>
                <div className="col-sm"><ul>
                    {country.borders.map(border => {
                        let found = countries.find(country => country.cca3 === border)
                        let index = countries.indexOf(found)
                        return <li>
                        <Link to={`/country/${index}`}>
                        {found.name.official}
                        </Link>
                        </li>
                    })}
                </ul></div>
            </div>

        </div>
    )
}
