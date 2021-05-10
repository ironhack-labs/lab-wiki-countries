import React from 'react'
import countries from "../countries.json"

export default function CountryDetails(props) {
    console.log('Props', props);
   
    const foundCountry = countries[props.match.params.id]

    return (
      <div>
        <h1>Country Details</h1>
        {foundCountry ? (
          <div>
            <h2>{foundCountry.name.common}</h2>
          </div>
        ) : (
          <p>
            Ha ocurrido un error. No hemos podido encontrar la película que
            buscabas
          </p>
        )}
      </div>
    );
}
