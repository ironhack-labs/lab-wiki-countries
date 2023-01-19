import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CountryDetails({countriesList}){
    
    const {alpha3code} = useParams();

    const selectedCountry = countriesList.find((choosenCountry) => {
        return choosenCountry.alpha3Code === alpha3code;
    })
   

    return (
      <div className="col-7">
        <h2>{selectedCountry.name.official}</h2>
        <div className="card">

            <p>Capital: {selectedCountry.capital}</p>
            <p>Region: {selectedCountry.region}</p>
            <p>Area: {selectedCountry.area}</p>
            <p>Borders:
              {selectedCountry.borders.map((e) => {
                return (
                    <p key={selectedCountry.alpha3Code}>
                        {e}
                    </p>
                )
              })}
            </p>
            <p>Status: {selectedCountry.status}</p>

        </div>
      </div>
    );
}