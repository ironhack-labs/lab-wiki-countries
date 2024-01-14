import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import CountryDetails from "./CountryDetails";

function CountriesList() {


    const [countries, setCountries] = useState([])
    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
        .then((response) => {
          setCountries(response.data)
        })
        .catch(error => error)
      }, []);
    


    return (
    <>
    <h1>List of countries</h1>
    <div className="container">
    
    {countries.length == 0 
    ? <p>Loading list of countries...</p>
    : countries.map(function(elm) {
      return (
       <Link className="link card" to={`${elm.alpha3Code}`} key={elm.alpha3Code}>
       <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="country flas"/>
        <p>{elm.name.common}</p>
          </Link>
    )
    
  })
  }
  </div>
    
    </>
)
}

export default CountriesList