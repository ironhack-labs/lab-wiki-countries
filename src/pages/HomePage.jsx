import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries ")
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.error("Error in country data", error);
            });
    }, []);
    return (
        <>
            <section className="container">
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>WikiCountries: Your Guide to the world</p>
            </section>
            <div>
                <h1>List of Countries</h1>
                <ul>
                    {countries.map(country => (
                        <li key={country.alpha3Code}>
                            <Link to={`/country/${country.alpha3Code}`}>
                                <img
                                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                                    alt={`${country.name} flag`}
                                />
                                {country.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default HomePage;
