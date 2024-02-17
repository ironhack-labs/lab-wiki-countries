import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {

    const { countryId } = useParams();
    const [fetching, setFetching] = useState(true);
    const [countryDetails, setCountryDetails] = useState()


    
    useEffect(() => {
        // Get the country by id from the server
        axios.get('https://ih-countries-api.herokuapp.com/countries/' + countryId)
        .then((response) => {
            console.log(response)
            setCountryDetails(response.data);
            setFetching(false)
        })
    
    }, [countryId]);


    if (fetching) {
        return <p>Loading...</p>
    }

    
    return(
        <div className="container">
            <p style={{fontSize: 24, fontWeight: "bold"}}>Country Details</p>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} width={172} height={120} />
            <h1>{countryDetails.name.common}</h1>

            <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{countryDetails.capital[0]}</td>
                </tr>
                <tr>
                <td>Area</td>
                <td>
                    {countryDetails.area} km
                    <sup>2</sup>
                </td>
                </tr>
                <tr>
                <td>Borders</td>
                <td>
                    <ul>
                        {
                            countryDetails.borders.map((bC) => {
                                return (
                                    <li key={bC}><Link to={`/${bC}`}>{bC}</Link></li>
                                )
                            })   
                        }
                    </ul>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default CountryDetails;
