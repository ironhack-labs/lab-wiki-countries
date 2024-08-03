import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



function CountryDetails() {
 const {alpha3Code} = useParams()
 const [country,setCountry] =useState(null)
 const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
    .then((countryCode)=>{
        console.log(countryCode.data)
        setCountry(countryCode.data)
        setIsLoading(false);
    })

},[alpha3Code])

if (isLoading) return <h1>Loading</h1>

if (!country) return <h1>Country not found...</h1>

    return(
        <div>
        <h1>{country.name.common}</h1>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <p>Population: {country.population}</p>
        <p>Area: {country.area} km²</p>
        <p>
        Borders:{" "}
        {country.borders.length > 0 ? (
          country.borders.map((border) => (
            <Link key={border} to={`/country/${border}`}>{border}   </Link>
          ))
        ) : (
          "None"
        )}
      </p>
        </div>
    )
}

export default CountryDetails;
