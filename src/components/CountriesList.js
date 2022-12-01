import { Link } from "react-router-dom";
//import { useState, useEffect } from "react";

function CountriesList({countries}) {

    return (
        <div className="co">
        <h1>Countries:</h1>
        {countries.map((country) => {
          return (
            <div key={country.alpha3Code} className="country">
                <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
            </div>
          );
        })}
      </div>
    )
    
}

export default CountriesList;