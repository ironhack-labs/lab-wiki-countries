import React from "react";
import { NavLink } from "react-router-dom";

function CountriesList({ countries }) {
    return (
        <ul className="list-group   ">
            {countries.map((eachCountry) => {
                return (
                    <NavLink
                      className="list-group-item"
                        to={`/country-details/${eachCountry.cca3}`}
                        >
                        {eachCountry.name.common}
                    </NavLink>
                )
            })}
        </ul>
    )
}

export default CountriesList