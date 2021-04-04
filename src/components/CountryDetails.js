import React, { Component } from 'react'
import data from '../countries.json'

export default class CountriesDetails extends Component {

    state = {
        countries: [...data]
    }

    render() {
        let country = this.state.countries.filter(country => country.cca3 === this.props.match.params.code)

        return (

            <div className="col-7">
                <h1>{country[0].name.common}</h1>
                <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td className="CapitalTd">Capital</td>
                    <td>{country[0].capital[0]}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                        {country[0].area.toLocaleString('ES')} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                        { country[0].borders.length === 0 ? "No borders" : country[0].borders.map(border => {
                            return <li key={border}><a href={border}>{border}</a></li>
                        })}
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}







