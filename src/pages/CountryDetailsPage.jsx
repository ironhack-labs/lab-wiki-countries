import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import countriesData from "../data/countries.json";
import "./CountryDetailsPage.css";

const CountryDetailsPage = () => {
    const { countryId } = useParams();
    const [countryDetails, setCountryDetails] = useState(null);

    useEffect(() => {
        const findItemByAlpha3Code = (code) => {
            console.log(code);
            return countriesData.find((item) => item.alpha3Code === code);
        };

        const country = findItemByAlpha3Code(countryId);
        setCountryDetails(country);
    }, [countryId]);

    if (!countryDetails) {
        return <div>Loading...</div>;
    }

    const { alpha2Code, name, capital, area, borders } = countryDetails;

    return (
        <div className="country-card">
            <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
                alt={name.official}
                className="country-flag"
            />
            <div className="country-content">
                <h1>{name.official}</h1>
                <p>
                    <strong>Capital:</strong> {capital}
                </p>
                <p>
                    <strong>Area:</strong> {area}km
                </p>
                <p>
                    <strong>Borders:</strong>
                </p>
                <ul className="country-borders">
                    {borders && borders.length > 0 ? (
                        borders.map((border, index) => (
                            <li key={index}>{border}</li>
                        ))
                    ) : (
                        <li>No borders</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CountryDetailsPage;
