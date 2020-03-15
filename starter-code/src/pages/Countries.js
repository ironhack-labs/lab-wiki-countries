import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { CountryList } from '../components/CountryList';
import { CountryDetail } from '../components/CountryDetail';
import { Header } from '../components/Header';

// Countries
import countries from '../countries.json'

export const Countries = () => {
    const { country_code } = useParams();
    const [country, setCountry] = useState(false);

    useEffect(() => {
        setCountry(...countries.filter(country => country.cca3 === country_code))
    })

    const getCountryDetails = (countryCode) => {
        return countries
            .filter(country => country.cca3 === countryCode)
            .map(c => c.name.common)
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <CountryList
                        countries={countries}
                        currentCountry={country_code}
                    />
                    <CountryDetail
                        country={country}
                        getDetails={(countryCode) => getCountryDetails(countryCode)}
                    />
                </div>
            </div >
        </>
    )
}