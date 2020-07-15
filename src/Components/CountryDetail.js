import React from 'react'
import { Link } from 'react-router-dom'

import Countries from './countries.json'

const CountryDetails = () => {

    const id = Countries.match.params.id

    return (
        <>
            <div class="col-7">
                <h1>{id.name}</h1>
                <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{id.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{id.area}km
                    <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    <li><a href="/AND">Andorra</a></li>
                                    <li><a href="/BEL">Belgium</a></li>
                                    <li><a href="/DEU">Germany</a></li>
                                    <li><a href="/ITA">Italy</a></li>
                                    <li><a href="/LUX">Luxembourg</a></li>
                                    <li><a href="/MCO">Monaco</a></li>
                                    <li><a href="/ESP">Spain</a></li>
                                    <li><a href="/CHE">Switzerland</a></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CountryDetails