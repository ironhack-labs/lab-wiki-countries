import React from "react";
import {Link} from "react-router-dom";

function CountriesList(props) {
    return(
        <div>
            <div>
                {props.countries}
            </div>
        </div>
    )
}

export default CountriesList;