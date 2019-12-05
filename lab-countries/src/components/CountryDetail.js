import React from "react";
import '../App.css';
import countries from "../countries.json";

const CountryDetail = props => {
    
    return (
        <div className="col-7">
            <h1>{props.country.name.official}</h1>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital:</td>
                        <td>{props.country.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area:</td>
                        <td>
                            {props.country.area} km
                <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders:</td>
                        <td>
                            <ul>
                                {props.borders.map((country, idx) => (
                                    <li key={idx}> </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}



export default CountryDetail 