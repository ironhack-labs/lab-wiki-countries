import React from "react";

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