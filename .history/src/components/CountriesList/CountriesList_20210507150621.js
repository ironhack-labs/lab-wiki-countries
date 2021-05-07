import React from "react";
import {Link} from "react-router-dom";

function CountriesList(props) {
    console.log(props)
    console.log("Countries", props.countries)
    return(
        <div>
            <div>
                {props.countries.map(country => 
                    <Link href={`/${country.cca3}`}>{country.flag} country{.name.common</Link>
                )}
            </div>
        </div>
    )
}

export default CountriesList;