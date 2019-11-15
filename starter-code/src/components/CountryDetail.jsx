import React, { Component } from 'react'
import {Link} from 'react-router-dom';
let numeral = require('numeral');

export default class CountryDetail extends Component {



    render() {
        let theCountry = this.props.countries.find((eachCountry)=>{
            return eachCountry.cca3 === this.props.match.params.id;
        })

        let languages = () => {
            return Object.keys(theCountry.languages).map((language) => {
                return <li>{theCountry.languages[language]}</li>
            })
        }

        let borders = () => {
            let firstHalf = "https://www.countryflags.io/";
            let secondHalf = "/flat/32.png";
            return theCountry.borders.map(country => {
                let countryInfo = this.props.countries.find(eachCountry => {
                    return eachCountry.cca3 === country;
                })
                return (
                    <li>
                        <Link to = {"/country/" + country}>
                            <img src={firstHalf + countryInfo.cca2 + secondHalf}/> <span>{countryInfo.name.common}</span>
                        </Link>
                    </li>
                )  
            })
        }

        return (
            <div className="country-details">
                <h1>{theCountry.name.common}</h1>
                <table className="table">
                    <tbody>
                        <tr>
                            <td><b>Region</b></td>
                            {theCountry.capital[0] &&
                                <td>{theCountry.subregion}</td>
                            }
                            {!theCountry.subregion &&
                                <td>{theCountry.region}</td>
                            }
                        </tr>
                        <tr>
                            <td><b>Capital</b></td>
                            {theCountry.capital[0] &&
                                <td>{theCountry.capital[0]}</td>
                            }
                            {!theCountry.capital[0] &&
                                <td>No capital</td>
                            }
                        </tr>
                        <tr>
                            <td><b>Area</b></td>
                            <td>{numeral(theCountry.area).format('0,0')} km<sup>2</sup></td>
                        </tr>
                        <tr>
                            <td><b>Languages</b></td>
                            <td>
                                <ul>
                                    {languages()}
                                </ul>
                            </td>   
                        </tr>
                        <tr>
                            <td><b>Borders</b></td>
                            <td>
                                {theCountry.borders.length > 0 &&
                                    <ul>
                                        {borders()}
                                    </ul>
                                }
                                {!theCountry.borders.length > 0 && 
                                    <span>No bordering country</span>
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )

    }
}
