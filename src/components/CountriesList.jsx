import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import countriesInfo from "../countries.json";

function CountriesList(countryItems) {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        setCountries(countryItems.countries);
    }, [countryItems.countries]);

    return (
        <div className="col-5 countries-column">
            {countriesInfo.map((country) => (
                <div className="list-group" key={country.alpha3Code}>
                    <div className="list-group-item list-group-item-action">
                        <Link to={`/${country.alpha3Code}`} >
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} width="90px" alt="" /></Link>
                            <Link to={`/${country.alpha3Code}`} >{country.name.common}</Link>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default CountriesList;
