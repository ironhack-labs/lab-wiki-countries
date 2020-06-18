import React from 'react'
import {Link} from 'react-router-dom'
import countries from '../countries.json'
export default function Country(props){
    const thisCountry = countries.filter( el => el.cca3 === props.cca3)[0]
    const borderingCountries = countries.filter( el => thisCountry.borders.includes(el.cca3))
    return (<div>
        <h1>{thisCountry.name.common}</h1>
        <br/>
        <table>
            <tr>
                <td>Capital</td>
                <td>{thisCountry.capital}</td>
            </tr>
            <tr>
                <td>Area</td>
                <td>{thisCountry.area} km2</td>
            </tr>
            <tr>
                <td>Borders</td>
                <td>
                    <ul>
                        {
                            borderingCountries.map( country => 
                            <li>
                                <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
                            </li>)
                        }
                    </ul>
                </td>
            </tr>
        </table>
    </div>)
}