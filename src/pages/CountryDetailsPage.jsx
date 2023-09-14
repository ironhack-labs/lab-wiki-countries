import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {

    const { alpha3Code } = useParams();

    const [countryDetails, setCountryDetails] = useState({});

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com" + alpha3Code)
            .then(response => {
                setCountryDetails(response.data)
            })
            .catch(e => {
                console.log("error getting country details from API", e)
            })
    }, [])



    return (
        <section>
            <h1>Country Details</h1>
            <h2>{countryDetails.name}</h2>
        </section>
    )
}

export default CountryDetails;
