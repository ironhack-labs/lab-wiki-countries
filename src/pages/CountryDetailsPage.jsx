import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CountryDetailsCard from "../components/CountryDetailsCard";
import axios from "axios";

function CountryDetails() {

    // const countryId = useParams()
    // const countryCode = countryId.countryId
    // const countryURL = `https://ih-countries-api.herokuapp.com/countries/${countryCode}`

    // const [country, setCountry] = useState()
    // useEffect(() => {
    //     getCountry()
    // }, [])

    // const getCountry = () => {
    //     axios
    //         .get(countryURL)
    //         .then(response => setCountry(response.data))
    //         .catch(err => `Error (${err}) while fetching the country!`)
    // }

    const { countryId } = useParams();
    const countryURL = `https://ih-countries-api.herokuapp.com/countries/${countryId}`;
    const [country, setCountry] = useState(null);

    useEffect(() => {
        // Cambios hechos para que funcione la lista de países fronterizos
        const getCountry = async () => {
            try {
                const response = await axios.get(countryURL);
                setCountry(response.data);
            } catch (error) {
                console.error("Error fetching country:", error);
            }
        };

        getCountry();
    }, [countryURL]);

    return (
        <div className="countrydetails-container">
            <Navbar />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Country Details</p>
            {country ? <CountryDetailsCard country={country} /> : <h1>Loading...</h1>}
        </div>
    )
}

export default CountryDetails;
