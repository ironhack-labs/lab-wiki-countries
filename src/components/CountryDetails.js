import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function CountryDetails({countries, routeProps: { match: { params: { cca } } }}) {
    const [country, setCountry] = useState(null);

    useEffect(() => {
        getCountryData();
    }, [])

    useEffect(() => {
        if (cca !== country.alpha3Code) {
            getCountryData();
        }
    }, [cca])

    const getCountryData = async () => {
        let newCountry = await axios.get(`https://restcountries.eu/rest/v2/alpha/${cca}`);
        setCountry(newCountry.data)
    }

    if (!country) {
        return <p>Loading . . .</p>
    }

    const findCountryName = cca => {
        let country = countries.find(country => country.alpha3Code === cca);
        return country.name;
    }

    return (
        <div>
            <h1>{country.name}</h1>
            <table>
                <tbody>
                    <td>Capital</td>
                    <td>{country.capital}</td>
                </tbody>
                <tbody>
                    <td>Area</td>
                    <td>{country.area} km&#178;</td>
                </tbody>
                <tbody>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {country.borders.map(cca => {
                                return (
                                <li>
                                    <Link to={`/country/${cca}`}>{findCountryName(cca)}</Link>                                    
                                </li>
                                )
                            })}
                        </ul>
                    </td>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails
