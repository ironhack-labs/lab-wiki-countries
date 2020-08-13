import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';
import CountriesList from './CountriesList';

const CountryDetail = (props) => {
    let getCountry = (cca3) => countries.find((elem) => elem.cca3 === cca3);
    const { params } = props.match;

    const foundCountry = getCountry(params.cca3);
    let bordersArr = foundCountry.borders;
     //return
    
    return (
        <div className="col-7">
        <h1>{foundCountry.name.common}</h1>
        <table className="table">
            <thead></thead>
            <tbody>
            <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{foundCountry.capital}</td>
            </tr>
            <tr>
                <td>Area</td>
                <td>
                {foundCountry.area} km
                <sup>2</sup>
                </td>
            </tr>
            <tr>
                <td>Borders</td>
                <td>
                <ul>
                {bordersArr
                        .map((code) => countries.find((country) => code === country.cca3))
                        .map((elem, i) => {
                                    return (<li key={i}><Link to={`/countries/${elem.cca3}`}>{elem.name.common}</Link></li>)
                        })}
                </ul>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
  );
}
export default CountryDetail