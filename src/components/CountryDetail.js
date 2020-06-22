import React from 'react';
import countries from "../countries.json";
import "./CountryDetail.css";
import {Link} from "react-router-dom";


export default function CountryDetail(props) {
    let country = countries.find((country)=> country.cca3 === props.match.params.cca3);
    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="capital">Capital</td>
                        <td>{country.capital}</td>
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
                            {
                                country.borders.map((border)=>{
                                    let foundCountry = countries.find((country) => border === country.cca3)
                                    return <li>
                                        <Link to={`/country/detail/${border}`}>{foundCountry.name.common}</Link>
                                    </li>
                                })
                            }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

            
    )
}
