import React from "react";
import {Link} from "react-router-dom";

function CountriesList(props) {
  

    return(
        <div>
            <div>
            console.log(props.countries)
                {props.countries.map(country => 
                
                    <Link key={country.cca3} to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link>
                )}
            </div>
        </div>
    )
}

export default CountriesList;