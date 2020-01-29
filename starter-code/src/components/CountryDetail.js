import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';


const countryDetails = (props) => {
    console.log(props)
    const { params } = props.match;
    const foundCountry = countries.find(country => country.cca3 === params.countryId)
    const borderObjects = foundCountry.borders.map(cca3 => {
        return <li><Link to={`/countries/${cca3}`} >{countries.find(borderCountry => borderCountry.cca3 === cca3).name.common}</Link></li>
    })
    return (
        <div>
            <h2>{foundCountry.name.common} </h2>
            <hr/>
            <p>Capital: {foundCountry.capital}</p>
            <hr/>
            <p>Area: {foundCountry.area} km<sup>2</sup></p>
            <hr/>
            <div>Borders: {borderObjects}</div>
            <hr/>
            
            <div className="backlink">
            <Link to='/countries'>Back</Link>
            </div>
        </div>
    )
}



export default countryDetails;
