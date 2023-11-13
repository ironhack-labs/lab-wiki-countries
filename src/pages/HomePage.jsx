import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
            .then((response) => {
                setCountries(response.data);
            })
            .catch((error) => {
                console.log("Error: " + error);
            })
    }, [])

    return (
        <>
            <h1>WikiCountries: Your Guide to the World</h1>
            {countries.map((country) => {
                return (
                    <Link to={`/${country.alpha3Code}`}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country} flag image`} />
                        <p>{country.name.common}</p>
                    </Link>
                )
            })}
        </>
    )
}

export default HomePage;
