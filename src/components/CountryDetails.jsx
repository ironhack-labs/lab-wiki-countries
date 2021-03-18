import React from "react";
import countriesJSON from "../countries.json";
import { Link } from 'react-router-dom'

const CountryDetails = (props) => {
    const countryId = props.match.params.cca3;
    const foundCountry = countriesJSON.find((country) => country.cca3 === countryId);

    return (
        <div style={{ textAlign: "left" }}>
            {/* <h1>Selected country</h1> */}
            {/* <pre>{JSON.stringify(props, null, 2)}</pre>
      <p>{props.match.params.cca3}</p> */}

            <h1>{foundCountry.name.common}</h1>
            <h3>Capital : {foundCountry.capital}</h3>
            <h3>Area : {foundCountry.area} km²</h3>
            <h3>Borders</h3>
            <ul>
                {foundCountry.borders.map((country) => {
                    return (
                        <li><Link to={`/countries/${country}`}>{country}</Link></li>
                    )
                })}
            </ul>
        </div >
    );
};

export default CountryDetails;