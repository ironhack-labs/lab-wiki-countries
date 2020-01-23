import React from "react";
import countries from "../countries.json"
import { Link } from "react-router-dom"

const Details = (props) => {
    console.log(props);
    let myCountry = countries.filter(country => props.match.params.id === country.cca3)[0]
    return (
    
        <div className="col-7">
            <h1>{myCountry.name.official}</h1><hr/>

        </div>
    
    )
};

export default Details;
  


