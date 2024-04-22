import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function CountryDetails() {
    const [countryDetails, setCountryDetails] = useState({})

    const { countryId } = useParams()

    const loadDetails = () => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then((response) => {
                setCountryDetails(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        loadDetails()
    }, [countryId])
    
    return (
        <>
            <h1>Country Details</h1>
            
            <article>
                <div>
                    {/* <p>{countryDetails.name.official}</p> */}
                    <p>Capital: {countryDetails.capital}</p>
                    <p>Area: {countryDetails.area} kms</p>
                    <p>Borders: {countryDetails.borders}</p>
                </div>
            </article>


        </>

    )
}

export default CountryDetails;
