import React, { Component } from 'react';
import allCountries from "../AllCountries/AllCountries.js"
import { Link } from 'react-router-dom';
import countryList from "../../countries.json"
import 'bootstrap/dist/css/bootstrap.css';

export default class CountryDetails extends Component {
    constructor() {
        super()
        this.state = {
            countries: countryList
        }
    }
    render() {
        const findCountry = this.state.countries.find((country) => {
            return country.cca3 == this.props.match.params.id
        })
        // findCountry.borders.map((e)=>{
        //     console.log(e)
        // })
        return (
            <div className="eachCountry">
                <div className="col-7">
                    <h1>{findCountry.name.common}</h1>
                    <table className="table"></table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{findCountry.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{findCountry.area}km<sup>2</sup></td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {findCountry.borders.map((e) => {
                                        const completeName = this.state.countries.find(country => country.cca3 === e)
                                        return (
                                            <li><Link to={e}>{completeName.name.common}</Link></li>
                                        )
                                    })
                                    }
                                    {/* {findCountry.borders.map((e) => {
                                        return (
                                            <li><Link to={e}>{e}</Link></li>
                                        )
                                    })} */}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </div>
            </div>
        );
    }
}

// const findCountry = this.state.countries.find((country) => {
//     return country.cca3 == this.props.match.params.id
// })


// {this.state.countries.map((country) => {
//     return (
//         <div className="list-group-item list-group-item-action">
//             <Link to={country.cca3}><img src={country.flag} />{country.name.common}</Link>
//         </div>
//     )
// })}