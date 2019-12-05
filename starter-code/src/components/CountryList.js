import React from "react";
import { Link } from "react-router-dom";
import countries from '../countries.json'
import shortid from 'shortid'

export default function CountryList(props) {

    return (
        <div>
        {countries.map(country => (
            <div key={shortid.generate()}>
            <Link to={`/countrydetail/${country.cca3}`}>
                <img
                src={`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`}
                alt=""
                />
                {country.name.common}
            </Link>
            </div>
        ))}
        </div>
    );
}
