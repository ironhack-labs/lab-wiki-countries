import { useState, useEffect } from "react";
import React from "react";
import axios from "axios"

function HomePage() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
            axios
            .get("https://ih-countries-api.herokuapp.com/countries")
            .then((response) => {
                console.log("Countries data:", response.data)
                setCountries(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.error("Error fetching countries:", error);
            })
    },[]);
        
    return(
        <div className="container">
            <h1>WikiCountries: Your Guide to the World</h1>
            <HomePage />
        </div>
    )
}

export default HomePage;
