import React from "react";
import {Link} from "react-router-dom";

function CountriesList(props) {
    console.log("Props sol",props)
    console.log("Countries", props.countries[0])

    return(
        <div>
            <div>
                {props.countries.map(country => 
                
                    <Link to={`/${country.cca3}`} key={country.cca3}  >{country.flag} {country.name.common}</Link>
                )}
            </div>
        </div>
    )
}

export default CountriesList;