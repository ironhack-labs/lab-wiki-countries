import React, { Component } from 'react';
import countries from './countries.json'
import { Link } from 'react-router-dom';

const findCountryByCca3 = (cca3) => {
    return countries.find(a => { return a.cca3 == cca3 })
}

const countryDetails = (props) => {

    const cca3 = props.match.params.cca3
    const country = findCountryByCca3(cca3)

    const tdStyle = {
        width: '30%'
    }
    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={tdStyle}>Capital</td>
                        <td style={tdStyle}>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country.area}
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td style={tdStyle}>Borders</td>
                        <td style={tdStyle}>{country.bouders}</td>
                        <td>
                            <ul>
                                {country.borders.map(a => {
                                    console.log(a)
                                    return (<li>
                                        <Link to={'/' + a} className="list-group-item list-group-item-action">{a}</Link>
                                    </li>)
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default countryDetails;
