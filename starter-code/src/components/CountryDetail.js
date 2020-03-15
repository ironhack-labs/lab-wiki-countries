import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

// NPM Package (called gemoji) to convert code to emoji
import toName from "gemoji/emoji-to-name";
import toEmoji from "gemoji/name-to-emoji";

// Countries
import countries from '../countries.json'

export const CountryDetail = () => {
    const { country_code } = useParams();
    const [country, setCountry] = useState(false);

    useEffect(() => {
        setCountry(...countries.filter(country => country.cca3 === country_code))
    })

    const getCountryFlag = (flagCode) => {
        return toEmoji[toName[flagCode]] || toEmoji['white_flag']
    }

    const getCountryDetail = (countryCode) => {
        return countries
            .filter(country => country.cca3 === countryCode)
            .map(c => c.name.common)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-5" style={{ maxHeight: '100vh' }}>
                    <div className="list-group" style={{ maxHeight: 'inherit', overflow: 'scroll' }}>
                        {
                            countries.map((country, i) => {
                                const isActive = country.cca3 === country_code && 'active';
                                return <Link key={i} className={`list-group-item list-group-item-action ${isActive}`} to={`/${country.cca3}`}>
                                    <span aria-label="Aruba flag" role="img">{getCountryFlag(country.flag)} {country.name.common}</span>
                                </Link>
                            })
                        }
                    </div>
                </div>
                {country && <div className="col-7">
                    <h1>{country.name.common}</h1>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '30%' }}>Capital</td>
                                <td>{country.capital.length && country.capital[0] !== '' ? country.capital : 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>{country.area} km
                                <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {
                                            country.borders.length ? country.borders.map((countryCode, i) => (
                                                <li key={i}>
                                                    <Link to={`/${countryCode}`}>{getCountryDetail(countryCode)}</Link>
                                                </li>
                                            )) : 'N/A'
                                        }
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                }
            </div>
        </div >
    )
}