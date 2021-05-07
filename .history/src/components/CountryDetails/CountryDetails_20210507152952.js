import React from "react";
import {Link} from "react-router-dom";


function CountriesDetails(props) {
    const countryId = props.match.params.id;
    const country = props.countries.find(country => country.cca3 === countryId);

    const borderList
    const getCountryName = cca => props.find(country => country.cca3 === cca).name.common;
    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: '30%'}}>Capital</td>
                        <td>{country.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map(border => 
                                    <li><Link to={`/${border}`}>{getCountryName(border)}</Link></li>
                                )}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default CountriesDetails;