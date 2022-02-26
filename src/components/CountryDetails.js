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
        <div className='col-7'>
            {!foundCountry && <h3>Country not found!</h3>}
            {foundCountry && (
                <>
                    <h1>{foundCountry.name.common}</h1>
                    <p><strong>Capital:</strong> {foundCountry.capital}</p>
                    <p><strong>Area:</strong> {foundCountry.area}</p>
                    <p><strong>Borders:</strong></p>
                    <ul>{foundCountry.borders.map((e) => {
                        return (
                            <li>
                                <Link to={`/${e}`} element={<CountryDetails country={countries} />}>
                                    {e}
                                </Link>
                            </li>
                        )
                    })}
                    </ul>
                </>
            )}
        </div>
    )
}

export default CountryDetails