
import React from "react";
import countries from "../../countries.json";

const CountryDetail = props => {

    const matchCountry = countries.find(elm => elm.cca3 === props.match.params.cca3);

    return (
      <div >
        <h1>{matchCountry.name.common}</h1>
        <br></br>
        <p>Capital: {matchCountry.capital}</p>
        <hr></hr>
        <p>Area: {matchCountry.area} km2</p>
      </div>
    );
};

export default CountryDetail