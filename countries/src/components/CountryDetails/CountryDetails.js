import React from 'react';
import { Link } from 'react-router-dom';
import countries from './../../countries.json'

const CountryDetails = (props) => {
        
    const countryArr = countries.filter(country => country.cca3 === props.match.params.country)
    const country = countryArr[0]
    return (
        <div className="col-7">
             <h1>{country.name.common}</h1>
            <hr></hr>
            <h5>Capital</h5>
            <p>{country.capital}</p>
            <hr></hr>
            <h5>Area</h5>
            <p>{country.area} km</p>
            <hr></hr>
            <h5>Borders</h5>
            <ul>
                {country.borders.map(elm =>
                    <li key={elm}><Link to={elm}>{elm}</Link></li>
                )}
                
            </ul> 

        </div>
    )

}

export default CountryDetails