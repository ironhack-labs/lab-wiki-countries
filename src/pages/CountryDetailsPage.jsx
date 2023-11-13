import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const apiCountryDetailsURL = "https://ih-countries-api.herokuapp.com/countries/"

function CountryDetails(props) {

    const [countryDetails, setCountryDetails] = useState([])
    const [fetching, setFetching] = useState(true)
    let { countryId } = useParams();


    useEffect(() => {
        let currentApiURL = apiCountryDetailsURL + countryId
        const fetchData = async () => {
            try {
                const response = await axios.get(currentApiURL)
                setCountryDetails(response.data)
                setFetching(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [countryId])

    return (
        <div className="container">
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>
            {fetching ? <p>Loading...</p> :
                <>
                    <h1>{countryDetails.name ? countryDetails.name.common : "no country name available"}</h1>

                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '30%' }}>Capital</td>
                                <td>{countryDetails.capital ? countryDetails.capital : "no country capital available"}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>{countryDetails.area ? countryDetails.area : "no country area available"} km<sup>2</sup></td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {
                                            countryDetails.borders != '' && countryDetails.borders != undefined
                                                ? countryDetails.borders.map(border => { return <li key={border} className="list-group-item"><Link to={`/${border}`}>{border}</Link></li> })
                                                : "no country borders available"
                                        }
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            }
        </div>
    )
}

export default CountryDetails;
