import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function CountryDetailsPage(props) {
    const { alpha3Code, countryId } = useParams();
    const flagImageURL = `https://flagpedia.net/data/flags/icon/72x54/${alpha3Code.toLowerCase()}.png`;
    const apiUrl = `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`;

    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        function fetchCountryData() {
            axios.get(apiUrl)
                .then((response) => {
                    setCountryData(response.data);
                })
                .catch((error) => {
                    setCountryData(null);
                });
        }
        fetchCountryData();
    }, [apiUrl]);

    return(
        <div className="container">
            <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>
            {countryData === null ? (
                <h3>Loading...</h3>
            ) :  (
                <>
                    <img src={flagImageURL} alt={`flag of ${alpha3Code}`} />

                    <h1>{countryData.name}</h1>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                            <td style={{width: "30%"}}>Capital</td>
                            <td>{countryData.capital}</td>
                            </tr>
                            <tr>
                            <td>{countryData.area}</td>
                            <td>
                                551695 km
                                <sup>2</sup>
                            </td>
                            </tr>
                            <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {countryData.borders.map((border) => (
                                        <li key={border}>
                                        <Link to={`/country/${border.toLowerCase()}`}>{border}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            </tr>
                        </tbody>
                    </table>

                </>
            )}
           
        </div>
    );
}

export default CountryDetailsPage;
