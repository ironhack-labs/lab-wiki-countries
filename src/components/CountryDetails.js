import React from 'react'
import Countries from "../countries.json"

console.log(Countries[0].cca3)

export default function CountryDetails(props) {
    console.log('Props', props);

    const getCountry = (id) => {
        return Countries.find(country => country.cca3 === id);
      }
    
    const country2 = getCountry(props.match.params.id);

    console.log(country2)

            return(
            <div>
                {console.log(country2)}
                <h1>{country2.name.official}</h1>
                <h2>{country2.region}</h2>
                <h2>{country2.capital}</h2>
                <h2>{country2.flag}</h2>
               
            </div>

            )
  
}
