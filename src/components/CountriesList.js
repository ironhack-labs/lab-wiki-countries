import React from 'react'

import countries from '../countries.json'



export default function CountriesList() {




    return (
      <div>
        {countries.map((country, i) => {
          return (
            <a key={i} href={`/country/${country.cca3}`}> {/* THIS IS ADDED TO BROWSER TAB */}
              <p>{country.cca3}  {country.name.common}</p>
            </a>
          );
        })}
      </div>
    );
  
}