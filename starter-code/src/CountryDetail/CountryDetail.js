import React from "react";
import countries from '../countries.json'
import { Link } from 'react-router-dom'

const Country = (props) => {

    const foundCountry = countries.find(elm => props.match.params.cca3 === elm.cca3)

    return (
        <>
            <div className="col-7" >
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Pais: {foundCountry.name.common}</td>
                            <td>Capital: {foundCountry.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{foundCountry.area}</td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {foundCountry.borders.map((elm, idx) => <li key={idx}><Link className="list-group-item list-group-item-action" key={idx} to={elm}> {countries.find((country) => country.cca3 === elm).name.common}</Link> </li>)}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >
        </>

    )

}

export default Country