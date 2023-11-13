import { useState, useEffect, } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function CountryDetails() {

    const {countriesArr} = useParams()
    const [countryCode, setCountryCode] = useState(null);
    
    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries/alpha3Code')
            .then(response => {
                setCountryCode(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
            {countryCode ? countryCode.map((country) => {
            <h1>{countriesArr}</h1>

        }) : (<p>loading...</p>)}
        </>
    )
}

export default CountryDetails;