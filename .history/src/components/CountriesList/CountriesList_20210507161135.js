import React from "react";
import {Link} from "react-router-dom";

function CountriesList(props) {
  

    return(
        <div>
            <div>
                {props.countries.map(country => 
                console.log("MAP CONTRY")
                    <Link key={country.cca3} to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link>
                )}
            </div>
        </div>
    )
}

export default CountriesList;