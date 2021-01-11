import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import countries from '../countries';

const CountryDetails = (props) => {

    const currentDetails = countries.find(country => country.cca3 === props.match.params.theID);

    return (
        <div className="col-7">
            <h1>{currentDetails.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="capital-city">Capital</td>
                        <td>{currentDetails.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{currentDetails.area} km<sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            {currentDetails.borders.length === 0 ? (<span>none</span>) : ""}
                            <ul>
                                {currentDetails.borders.map((border, index) => {

                                    const borderingCountry = countries.find(country => country.cca3 === border);
                                    {/* console.log(currentDetails.borders); */ }
                                    return (
                                        <li key={index}>
                                            <Link to={"/wiki-countries/" + borderingCountry.cca3}>{borderingCountry.name.common}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CountryDetails;