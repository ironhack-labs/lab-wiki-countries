import React from "react";
import { useParams, Link } from "react-router-dom";
import countriesDatabase from "../countries.json"

const countries = {};

countriesDatabase.forEach(country => countries[country.alpha3Code] = country);

// countries = {"COL": {}}

function CountryDetails(props) {
    const { countryId } = useParams()
    console.log(countryId)

    // const country = countriesDatabase.find(country => country.alpha3Code === countryId);
    // const borderCountries = country.borders.map(alpha3Code => countriesDatabase.find(country => country.alpha3Code === alpha3Code));

    // const prop = ABC
    // countries = {"ABC": {"name": "abc"}}
    // Solution 1: countries[prop] <==> {"name": "abc"}
    // Solution 2: countries.ABC <==> {"name": "abc"}

    const country = countries[countryId];
    const borderCountries = country.borders.map(alpha3Code => countries[alpha3Code]);

    return (
        <>
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
                {/* {country.borders.map((border) =>
                <ul key={`${border}`}>
                    <Link to={`/countries/${border}`}>{borderCountries}</Link>
                </ul>
            )} */}
                {borderCountries.map((borderCountry) =>
                    <ul key={`${borderCountry.alpha3Code}`}>
                        <Link to={`/countries/${borderCountry.alpha3Code}`}>{borderCountry.name.common}</Link>
                    </ul>
                )}
            </div>
        </>
    )
}

export default CountryDetails;
