import { useState, useEffect } from "react"; // React hooks
import { Link, useParams } from "react-router-dom"; // Routing
import axios from "axios"; // to get request from API URL

// Create a function to display the information of a specific country
function CountryDetails() {
    // Hold an array of country details
    const [country, setCountry] = useState([])
    // Indicate the data is still being loaded
    const [loading, isLoading] = useState(true)
    // Extract the countryId from the URL
    let {countryId} = useParams();
    // Fetch country data based on the countryId parameter
    const countryAPI = `https://ih-countries-api.herokuapp.com/countries/${countryId}`
    // Get the request from the API for the countries details
    useEffect(()=>{
        axios.get(countryAPI).then((apiResponse)=>{
            setCountry (apiResponse.data)
            isLoading(false)
            console.log(apiResponse)
        })
        // Ensures that the effect is only triggered when the countryId changes
    }, [countryId])

    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading &&  <div className="container">
                <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>
                <h1>{country.name.common}</h1>
                <table className="table">
                    <tbody>
                        <tr>
                            <td style={{width: "30%"}}>Capital</td>
                            <td>{country.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{country.area} Km <sup>2</sup></td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <div>
                                    {country.borders.map((border)=>{
                                        return (
                                            <div key={border}>
                                            <Link to={`/${border}`}><li>{border}</li></Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>}
        </div>
    )
}
export default CountryDetails;