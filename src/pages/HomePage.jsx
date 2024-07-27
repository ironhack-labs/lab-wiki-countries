import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/countries.css";

function HomePage() {
const [countries, setCountries] = useState([]);

useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
        .then(response => {
            console.log(response.data); // Check the API response structure here
            setCountries(response.data);
        })
        .catch(error => {
            console.error("Error fetching the countries data: ", error);
        });
}, []);

return(
    <>
    <div className="container">
        <h1 className="page-title">WikiCountries: Your Guide to the World!</h1>
        <div className="list-group">
            {countries.map((country) => (
                <div className="each-country">
                <Link 
                key={country.alpha3Code}
                className="list-group-item list-group-item-action"
                to={`/${country.alpha3Code}`}
                
                >             
                <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name.common} flag`}
                className="country-flag-image"
                />
                    {country.name.common}
                </Link>
                </div>
            ))}
        </div>
    </div>
    </>
)
}

export default HomePage;
