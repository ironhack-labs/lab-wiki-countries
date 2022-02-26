import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';

function CountryDetails(props) {
    const { countryId } = useParams();
    const [country, setCountry] = useState(undefined);

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => Promise.all([
                Promise.resolve(response.data),
                Promise.all(response.data.borders.map(alpha3Code => axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)))
            ]))
            .then(([country, borderCountriesResp]) => {
                country.borders = borderCountriesResp.map(borderCountryResp => borderCountryResp.data)

                setCountry(country)
            })
            .catch(err => console.log(err))
    }, [countryId])

    return (
        <>{country &&
            <div className="country-details">
                <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt={country.name.common}
                    style={{ width: '250px', margin: "30px 0" }}
                />
                <h1 style={{ marginBottom: "40px" }}>{country.name.common}</h1>
                <h5>Capital: {country.capital[0]}</h5>
                <hr />
                <h5>Area: {country.area}</h5>
                <hr />
                <h5>Borders: </h5>
                {country.borders.map((borderCountry) =>
                    <ul key={`${borderCountry.alpha3Code}`}>
                        <Link to={`/countries/${borderCountry.alpha3Code}`}>{borderCountry.name.common}</Link>
                    </ul>
                )}
            </div>
        }</>
    )
}

export default CountryDetails;
