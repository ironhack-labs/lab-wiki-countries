import React from 'react'
import { Link } from 'react-router-dom'

function CountriesList(props) {
 const {countries}=props
  return (
    <div>
{countries.map(country=>{
return <div key={country.alpha3Code}><Link to={`/${country.alpha3Code}`}>
<img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
<p>{country.name.official}</p></Link></div>})}



    </div>
  )
}

export default CountriesList