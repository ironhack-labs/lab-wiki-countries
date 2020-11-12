import React from 'react'
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
    return (
        <div className="col-5 countriesList">
            <div className="list-group">
                   { props.countries.map((country, index) => 
                    <a className={`list-group-item list-group-item-action`} key={country.cca3}><Link to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link></a>
                   )}
            </div>
        </div>
    )
}