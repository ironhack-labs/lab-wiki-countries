import React from 'react';
import { Link } from 'react-router-dom';
import ReactCountryFlag from "react-country-flag"

export const CountryList = ({ countries, currentCountry }) => {

    return <div className="col-5" style={{ maxHeight: '100vh' }}>
        <div className="list-group" style={{ maxHeight: 'inherit', overflow: 'scroll' }}>
            {
                countries.map((country, i) => {
                    const isActive = country.cca3 === currentCountry && 'active';
                    return <Link key={i} className={`list-group-item list-group-item-action ${isActive}`} to={`/${country.cca3}`}>
                        <span>
                            <ReactCountryFlag countryCode={country.cca2} />
                            {country.name.common}
                        </span>
                    </Link>
                })
            }
        </div>
    </div>
}