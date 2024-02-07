import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function CountryDetails(props) {
    const { alpha3code } = useParams();

    const [country,setCountry] = useState(null)
  
    useEffect(()=>{
      axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3code}`)
      .then((country)=>{setCountry(country.data)})
      .catch((error)=>{
       console.log(error)
      })
     },[alpha3code])
     if (country === null) {
      return <div>Cargando...</div>;}
    return(
      <div>
  <h1>Country details</h1>
  <h2>{country.name.official}</h2>
  <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.alpha2Code} flag`} />
  <h4>Capital: {country.capital} </h4>
  <h4>Area {country.area} km²</h4>
  <h4>Borders {country.borders.map((eachBorder)=>(
  <Link key={eachBorder} to={`/${eachBorder}`}><p>{eachBorder}</p></Link>
  ))}</h4>


     
    </div>
    ) 
  }
  export default CountryDetails