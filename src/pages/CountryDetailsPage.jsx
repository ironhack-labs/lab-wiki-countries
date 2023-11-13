import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


function CountryDetails() {

    const { countryId } = useParams();

    const [countryDetails, setCountryDetails] = useState(null)

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then((response) => {
                setCountryDetails(response.data)
            })
            .catch((error) => {
                console.log("Error: " + error);
            })
    }, [countryId])

    return (
        <>
            <h1>Country Details</h1>
            <div>
                {countryDetails === null
                    ? <p>Loading...</p>
                    : <div>
                        <h1>{countryDetails.name.common}</h1>
                        <h2>Capital: {countryDetails.capital}</h2>
                        <p>Area: {countryDetails.area} m²</p>
                        {console.log(countryDetails)}
                        {countryDetails.borders.map((border) => {
                            return (
                                <Link to={`/${border}`}>
                                    <p>{border}</p>
                                </Link>)
                        })}
                    </div>
                }
            </div>
            <Link to="/"> Back</Link>
        </>
    )
}

export default CountryDetails;
