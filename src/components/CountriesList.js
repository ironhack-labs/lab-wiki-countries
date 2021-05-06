import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
    const list = props.countries.map(country => {
        return <Link key={country.cca3} className="list-group-item list-group-item-action" to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link>
    })

    return (
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
                {list}
            </div>
        </div>
    )
}
