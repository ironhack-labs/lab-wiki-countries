import React from "react";
import {Link} from "react-router-dom";

function CountriesList(props) {
    return(
        <div>
            <div>
                {props.countries.map(country =>
                    <Link
                )}
            </div>
        </div>
    )
}

export default CountriesList;