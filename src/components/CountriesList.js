import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
    const allCountries = props.countries.map(country => {
        return (
            <li key={country.cca3} className="list-group-item list-group-item-action">
                <Link to={`/${country.cca3}`}>{country.flag} {country.name.official}
                </Link>
            </li>
        )
    })
    return (
        <div className="col-5" style={{'maxHeight': '90vh', 'overflow': 'scroll'}}>
            <div className="list-group">
              {allCountries}
            </div>
        </div>
    )
}

export {CountriesList};