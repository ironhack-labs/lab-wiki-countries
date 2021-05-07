import React from "react";

function CountriesList(props) {
    return(
        <div>
            <div>
                {props.countries.map(countruy)}
            </div>
        </div>
    )
}

export default CountriesList;