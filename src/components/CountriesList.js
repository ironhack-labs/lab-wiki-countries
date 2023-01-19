import React, {  useState,useEffect } from 'react'
import countries from '../countries.json';
import CountryDetails from './CountryDetails';
import {Link} from "react-router-dom"
import axios from "axios"

const CountriesList = () => {
const [countriesArr, setCountriesArr] = useState(null);

useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then((response) => {
        //console.log(response.data);
        setCountriesArr(response.data)
    })
    .catch((e) => {console.log("There was an error", e)})
}, []);

if (!countriesArr) {  return <p> Loading... </p>; }
  return (
    <div>
        <ul>
{countriesArr.map((country)=>{
    return (
<li key={country.alpha3Code}>
        <Link to={`/country/${country.alpha3Code}`}  element={ <CountryDetails country={country} countriesArr={countriesArr}/>}>{country.name.common}</Link>
        </li>
    )
    
    })}
    </ul>
    </div>
  )
}

export default CountriesList