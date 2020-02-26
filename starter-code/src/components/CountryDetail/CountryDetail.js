import React from 'react';
import countries from './../../countries.json'
import { Link } from 'react-router-dom';
import './CountryDetail.css'


const CountryDetail = props => {
    let country
    let hidden = "hidden"
    const searchName = elem => {
        let country = countries.filter(country => country.cca3 === elem)
        return country[0].name.common
    }
    if (props.match) {
        country = countries && countries.filter(elem => elem.cca3 === props.match.params.code)
        hidden = ""
    }
    console.log(country)
    return (
        <div className={hidden}>
            <h1>{country && country[0].name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{country && country[0].capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country && country[0].area} km
                    <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country && country[0].borders.map((elem, idx) => <li key={idx}><Link to={"/" + elem}>{searchName(elem)}</Link></li>)}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetail