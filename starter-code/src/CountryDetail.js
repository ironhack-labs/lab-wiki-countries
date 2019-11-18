import React, { Component } from 'react'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import countries from './countries.json'



export default class CountryDetail extends Component {


    findCountry = (id) => {
        return countries.find((aCountry)=>{
            return aCountry.cca3 === id
        })
    }


    getBorders = (borders) => {
        return borders.map((eachBorder) => {
            let country = this.findCountry(eachBorder);
            return (
                <li>
                    <Link to={`/country/${eachBorder}`}>
                        {country.name.common}
                    </Link>
                </li>
            )
        })
    }


    render() {
        console.log(this.props.match.params.id)
        console.log(this.props)

        let country = this.props.countries.find(eachCountry => {
            console.log(eachCountry.name.common)
            return this.props.match.params.id == eachCountry.cca3
        })

        console.log(country)

        return (
            <div>

                <div className="col-7">
                    <h1>{country.flag} {country.name.common}</h1>
                    {this.props.match.params.id}
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Capital</td>
                                <td>{country.capital[0]}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>{country.area} km
                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                         {this.getBorders(country.borders)}




                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
