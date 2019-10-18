import React, { Component } from 'react';
import countriesList from '../countries.json';
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
    render() {

        let code = this.props.match.params.countryCode;
        let countryChosen = countriesList.filter((country) => country.cca3 === code)[0];

        return (

            <div>
                <h1>{countryChosen.name.official}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '30%' }}>Capital</td>
                            <td>{countryChosen.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{countryChosen.area} km
                      <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {countryChosen.borders.map((oneBorder) => {
                                        let code = oneBorder;
                                        let country = countriesList.filter((country) => country.cca3 === code)[0];
                                        return <li><Link to={`/countries/${oneBorder}`}>{country.name.common}</Link></li>

                                        // let code = oneBorder;
                                        // let countryChosen = countriesList.filter((country) => country.cca3 === code)[0];
                                        // <li>
                                        //     {countryChosen.name}
                                        // </li>
                                        // <Link className="list-group-item list-group-item-action"
                                        //     to={`/countries/${country.cca3}`}>
                                        //     {country.name.common}
                                        // </Link>

                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table></div>


        )
    }
}


export default CountryDetail