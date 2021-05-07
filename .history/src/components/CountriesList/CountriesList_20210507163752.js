import React from "react";
import {Link} from "react-router-dom";

function CountriesList(countries) {
    console.log("Props sol",countries[0])
   

    return(
        <div>
            <div>
                {props.countries.map(country => 
                
                    <Link to={`/${country.cca3}`} key={country.cca3}>{country.flag} {country.name.common}</Link>
                )}
            </div>
        </div>
    )
}

export default CountriesList;