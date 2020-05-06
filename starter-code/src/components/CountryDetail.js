import React, { Component } from 'react';

export const CountryDetail = (props) => {

    const idCountry = props.match.params.id
    const countrySelected = props.countries.filter(country => idCountry == country.cca3)[0]


    const borderCountries = props.countries.filter(country => countrySelected.borders.includes(country.cca3))

    return (
        <div>
            <h1>{countrySelected.name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{countrySelected.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{countrySelected.area} km
                    <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {borderCountries.map((country, idx) => <li > <a key={country.ccn3+idx} href={country.cca3}>{country.name.official}</a></li>)}

                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}