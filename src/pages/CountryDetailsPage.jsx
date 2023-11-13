import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetails() {

const {countryId} = useParams()

const [countryDetails, setCountryDetails] = useState({})

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then((response) => {
                console.log(response.data)
                setCountryDetails(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [countryId])

    console.log(countryDetails)


    return (
        <div>
        <h1>Country Details</h1>
        <h3>{countryDetails.capital}</h3>
        <h3>{countryDetails.area}</h3>
        <h1>{countryDetails.name.common}</h1>

        { !countryDetails 
        ? <p>Loading...</p>
        : <div>
            {/* <h1>{countryDetails.name.common}</h1> */}
           
            
            {countryDetails.borders.map((border) => {
                return ( 
                        <h3>{border}</h3>
                )
            })}
        </div>
        }
        </div>
    )
}
export default CountryDetails;
