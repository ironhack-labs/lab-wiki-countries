import React from 'react';
import countries from '../countries.json';
import {Link, Route} from 'react-router-dom';

function CountryDetail (props) {
    let theCountry = countries.find((country)=>country.cca3===props.match.params.cca3);
    return (
        <div>
            <h1>{theCountry.name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td  width= "30%">Capital</td>
                        <td>{theCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{theCountry.area} Km <sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {theCountry.borders.map((neighbor)=> {
                                    debugger
                                    let theNeighbor = countries.find((country)=>country.cca3===neighbor) 
                                    return (
                                        <li>
                                            <Link to={`/country-detail/${neighbor}` }>{theNeighbor.name.official}</Link>
                                        </li>   
                                    )
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetail;