import React from "react";
import { Link } from "react-router-dom";
import countriesJSON from "./../countries.json";

const CountriesList = (props) => {
    return (
        <div>
        {countriesJSON.map((country) => {
            return (
                <div key={country.cca3}>
                    <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
                </div>


            );
        })}
        </div>
    );
};

export default CountriesList;