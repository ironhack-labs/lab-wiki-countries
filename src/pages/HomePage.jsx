import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
 
 const [countries, setCountries] = useState([])

 useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then((response) => {
        console.log(response.data)
       setCountries(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
 }, [])
 

    return (
        <div>
            <h1>WikiCountries: Your Guide to the World</h1>

            {countries.map((country) => {
                return (
                        <Link key={country.alpha3Code} to = {`/${country.alpha3Code}`}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                        <p>{country.name.common}</p>
                        </Link>
                )
            })}
        </div>
    )
}
export default HomePage;
