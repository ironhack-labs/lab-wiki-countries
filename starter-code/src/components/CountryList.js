import React from "react";
import { Link } from "react-router-dom";
import countries from '../countries.json'
import shortid from 'shortid'

export default function CountryList(props) {

    return (
        <div className="listContainer">
        {countries.map(country => (
            <div className="CountryList" key={shortid.generate()}>
            <Link to={`/countrydetail/${country.cca3}`}>
                <img
                className="flag"
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
