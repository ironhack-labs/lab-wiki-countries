import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function CountryDetailsPage() {
    const { alpha3Code } = useParams();
    const [countryDetails, setCountryDetails] = useState(null);

    useEffect(() => {
        if (alpha3Code) {
            axios
                .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
                .then((response) => {
                    setCountryDetails(response.data);
                })
                .catch((error) => console.error("error message", error));
        }
    }, [alpha3Code]);

    if (!countryDetails) {
        return (
          <div>
            <p>Loading...</p>
          </div>
        );
    }

    return (
        <div>
            <Navbar />

            <div className="container">
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

                <h1>{countryDetails.name?.common}</h1>  
                {/* MUY IMPORTANTE EL ? SIN ÉL NO FUNCIONA */}
                <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
                    alt={`${countryDetails.name.common} flag`}
                    style={{ display: "block", margin: "20px auto" }}                    
                />

                <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td style={{ width: "30%" }}>Capital</td>
                    <td>{countryDetails.capital}</td>
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
                            {countryDetails.borders ? countryDetails.borders.map((border) => {
                                    return (
                                    <li key={border}>
                                        <Link to={`/${border}`}>{border}</Link>
                                    </li>
                                    );
                                })
                                : null}
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default CountryDetailsPage;
