import React, {useState} from 'react'
import countries from '../countries.json'


const CountryDetails = (props) => {
    const [ctry, setCountries]=useState(countries)
    const c=[...ctry]
    
    let cca3Props= props.match.params.cca3
    let info= c.filter(country=> country.cca3 === cca3Props)
    console.log(info)
    // setCountries(info)
  

    return (
        <div>
        <h1> CountryDetails</h1>
 
          <h1></h1>
          <h1>{props.match.params.cca3} </h1>
          <h2>{ctry.area}</h2>
          <h2>{ctry.capital}</h2>
          {/* <h1>{props.match.params} </h1>  */}
        </div>
    )
}
export default CountryDetails