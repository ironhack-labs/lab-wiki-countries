import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetails({ countries }) {

    const { id: countryCode } = useParams()
    const selectedCountry = countries.find(
        (oneCountry) => oneCountry.alpha3Code === countryCode
    )
    return (
        <div>
            <div className="col-7">
                <h1>{selectedCountry.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "30%" }}>Capital</td>
                            <td>Capital{selectedCountry.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                551695 km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <div>

                                {
                                    countries.map((country, name) => (
                                        <Link
                                            to={`/${country.alpha3Code}`}
                                            key={name}
                                            className="list-group-item list-group-item-action">

                                            {country.border}
                                        </Link>
                                    ))
                                }

                            </div>
                            <td>
                                <ul>

                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default CountryDetails;