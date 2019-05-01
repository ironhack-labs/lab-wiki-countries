import React from 'react'
import countries from '../countries'
import { Link } from 'react-router-dom'

const CountryDetail = props => {
    const { id } = props.match.params
    const found = countries.find(el => el.cca3 === id)
    const borders = found.borders

    return (
        <div>
            <h1>{found.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{found.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{found.area} km
                    <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {borders.map(borderCountry => {
                                    const foundBorder = countries.find(el => el.cca3 === borderCountry)
                                    return (
                                        <li key={foundBorder.cca3}> <Link to={`/${foundBorder.cca3}`} key={foundBorder.cca3}>{foundBorder.name.common}</Link></li>
                                    )
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetail