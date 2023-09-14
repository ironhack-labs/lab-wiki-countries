import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

export default function CountryDetailsPage() {
    const { alpha3CodeId } = useParams();
    const [countryDetails, setCountryDetails] = useState(null);

    const baseURL = "https://ih-countries-api.herokuapp.com/countries/";

    useEffect(() => {
        axios
            .get(baseURL + alpha3CodeId)
            .then((response) => {
                setCountryDetails(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                e;
            });
    }, [alpha3CodeId]);

    const renderedCountries = () => {
        return (
            <>
                <br />
                <br />
                <br />
                <br />
                <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
                />
                <br />
                <h1>Common Name: {countryDetails.name.common}</h1>
                <br />
                <h1>Official Name: {countryDetails.name.official}</h1>
                <br />
                <h1>Capital: {countryDetails.capital[0]}</h1>
                <br />
                <h1>Area: {countryDetails.area} km2</h1>
                <br />
                <br />
                <p>
                    {countryDetails.borders.map((e) => {
                        return (
                            <NavLink
                                to={"/" + e}
                                key={e}
                                style={{ marginLeft: "2rem" }}
                            >
                                {e}
                            </NavLink>
                        );
                    })}
                </p>
                <hr />
            </>
        );
    };

    return (
        <div>
            {countryDetails === null ? <p>Loading...</p> : renderedCountries()}
        </div>
    );
}
