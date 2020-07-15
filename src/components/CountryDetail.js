import React, { Component } from 'react';

const CountryDetail = props => {

    const id = props.match.params.id
    
    const selected = props.countries.filter(country => id == country.cca3)[0]


    const border = props.countries.filter(country => selected.borders.includes(country.cca3))

    return (
        <div class="col-7">
            <h1>{selected.name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{selected.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{selected.area} km
                    <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {border.map((country, idx) => <li > <a key={country.ccn3 + idx} href={country.cca3}>{country.name.official}</a></li>)}

                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
} 

export default CountryDetail;