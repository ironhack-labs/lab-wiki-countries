import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BASE_URL = "https://ih-countries-api.herokuapp.com";

function CountryDetails() {
    const [country, setCountry] = useState(null);
    const { countryId } = useParams();

    useEffect(() => {
        axios
            .get(`${BASE_URL}/countries/${countryId}`)
            .then((response) => {
                const countryData = response.data;
                setCountry(countryData);
            })
    }, [countryId]);

    return (
        <div className="container">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
            {country === undefined || country === null
                ? <p>Loading...</p>
                : <>
                    <img
                        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                        alt={country.name.common}
                    />
                    <h1>{country.name.common}</h1>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ width: "30%" }}>Capital</td>
                                <td>{country.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>{country.area} km<sup>2</sup></td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {country.borders.map((border, index) => (
                                            <div key={index}>
                                                <Link
                                                    to={`/${border}`}
                                                >
                                                    {border}
                                                </Link>
                                            </div>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>}
        </div>
    );
}

export default CountryDetails;
