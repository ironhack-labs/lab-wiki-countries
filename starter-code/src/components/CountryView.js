import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class CountryDetail extends Component {

    state = {
        countries: [...this.props.countries]
    }


    borderFinder = (country) => {
        return this.state.countries.find(elem => elem.cca3 === country).name.common
    }

    render() {
        let country = this.state.countries.filter(country => country.cca3 === this.props.match.params.cca3)[0]
        return (
            <div className="container" style={{ textAlign: "left" }}>
                <h3>{country.name.common}</h3>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Capital </td>
                            <td>{country.capital} </td>
                        </tr>
                        <tr>
                            <td>Area </td>
                            <td>{country.area} km2</td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {country.borders.map((elem, index) => <li key={index}> <Link to={"/" + elem}>{this.borderFinder(elem)}</Link></li>)
                                    }
                                </ul>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        )
    }

}