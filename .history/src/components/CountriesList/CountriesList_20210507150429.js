import React from "react";
import {Link} from "react-router-dom";

function CountriesList(props) {
    console.log(props)
    return(
        <div>
            <div>
                {props.countries.map}
            </div>
        </div>
    )
}

export default CountriesList;