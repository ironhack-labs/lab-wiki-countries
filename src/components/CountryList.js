import React from "react";
import { Link, NavLink } from "react-router-dom";




function CountryList(props) {

    // console.log(countries)
    return (
        <div className="CountriesContainer">
          {props.countries.map((country) => {
            return (
              <NavLink key={country.alpha3Code} to={"/" + country.alpha3Code}>
                {country.name.common}
              </NavLink>
            );
          })}
        </div>
      );
    }

export default CountryList;