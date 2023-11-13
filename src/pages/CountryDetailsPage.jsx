import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {

    const { countryId } = useParams()

    const [countryDetails, setCountryDetails] = useState(null)

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
            <div>
                {!countryDetails
                    ? <p>Loading...</p>
                    : <div>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} />
                        <h1>{countryDetails.name.common}</h1>
                        <h3>Capital: {countryDetails.capital}</h3>
                        <h3>Area: {countryDetails.area} sqm</h3>
                        <ul>
                            {countryDetails.borders.map((border) => {
                                return (
                                    <li key={border}><Link to={`/${border}`}>{border}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}
export default CountryDetails;
