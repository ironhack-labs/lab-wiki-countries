import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

export default function CountryDetails(props) {
    const { params } = props.match
    const foundCountry = countries.find(country => country.cca3 === params.cca3)

    return (
        <div>
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
            <thead />
            <tbody>
            <tr>
            <td >Capital:</td>
            <td>{foundCountry.capital} </td>
            </tr>
            <tr>
            <td>Area: </td>      
            <td>{foundCountry.area} km<sup>2</sup> </td>
            </tr>
            <tr>
            <td>Borders: </td>
            <td>
                <ul>
                    {foundCountry.borders.map(borderCountry => (
                        <li key={borderCountry}>
                            <Link to={`/${borderCountry}`}>
                                {countries.find(country => country.cca3 === borderCountry).name.common}
                            </Link>
                        </li>
                    ))}
                </ul>
            </td>
            </tr>
            </tbody>
            </table>
        </div>
    );
}