import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import countries from '../countries';

const CountryDetails = (props) => {

    let currentDetails = countries.find(c => c.cca3 === props.match.params.theID)

    return (
        <div>
            <div className="col-7">
                <h1>{currentDetails.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{currentDetails.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{currentDetails.area} km
                    <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {currentDetails.borders.map((border, index) => {
                                        let borderingCountry = countries.find(c => c.cca3 === border)
                                        console.log(currentDetails.borders)
                                        return <li key={index}>
                                            <a>{borderingCountry.name.common}</a>
                                        </li>
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CountryDetails;