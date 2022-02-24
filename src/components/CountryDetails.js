import React from 'react'
import { useParams, Link } from 'react-router-dom'
import countries from '../countries.json'
import { useState, useEffect } from 'react';


function CountryDetails(props) {

    const [foundCountry, setfoundCountry] = useState(null);

    const { countryId } = useParams();

    useEffect(() => {
        const country = countries.find((countryObj) => {
            return countryObj.alpha3Code === countryId;
        })

        if (country) {
            setfoundCountry(country);
        }

    }, [countryId]);

    return (
        <div>
            {!foundCountry && <h3>Project not found!</h3>}
            {foundCountry && (
                <>
                    <h1>{foundCountry.name.common}</h1>
                    <p>Capital: {foundCountry.capital}</p>
                    <p>Area: {foundCountry.area}</p>
                    <ul>{foundCountry.borders.map((e) => {
                        return (
                            <li>{foundCountry.name.common}</li>
                        )
                    })}
                    </ul>
                </>
            )}
        </div>
    )
}

export default CountryDetails