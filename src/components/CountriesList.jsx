import React from 'react'

function CountriesList({ countries }) {
  return (
    <div>
        {countries.map((country) => 
        <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flat img'></img>
            
            <h1>{country.alpha3Code}</h1>
        </div>
        )}
    </div>
  )
}

export default CountriesList