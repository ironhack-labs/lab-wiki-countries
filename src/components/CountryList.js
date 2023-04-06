import React from "react";
import { Link } from "react-router-dom";




function CountryList(props) {

    // console.log(countries)
    return(
        <div classname="CountriesContainer" >
            {props.countries.map( country => {
              return  <Link to= { "/" + country.alpha3Code}> {country.name.common}</Link>

                
            })
            }
        </div>


    )
};

export default CountryList;