import React from 'react'
import { Link } from 'react-router-dom'
// import data from '../countries.json'
import CountryDetails from './CountryDetails';

export default function CountriesList(props) {
    // console.log(props.countries);
    return (
        <div>
            <h2>Countries</h2>
            {props.countries.map(country => {
                return (
                     <div key={country.cca3} className="list-group-item list-group-item-action"> 
                    <h3>
                        <Link to={`/countries/${country.cca3}`}>{country.flag}{country.name.common}</Link>
                    </h3>
                    </div>
                )
            })}
        </div>
    )
}
