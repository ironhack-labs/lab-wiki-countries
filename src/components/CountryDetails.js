import React from 'react';

import { Link } from 'react-router-dom'

import countriesData from '../countries.json';
import 'bootstrap/dist/css/bootstrap.css';


const CountryDetails = (props) => {

    console.log(props)

    const foundCountry =
        countriesData.find((country) => {
            return (props.match.params.id === country.cca3)
        });

     const borderName = (countryBorder) => {
        return countriesData.find((country) => { 
               return (country.cca3 === countryBorder)
         }).name.official
     };


        return (
            <div className="col-7">
                <h1>{foundCountry.name.official}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "30%" }}>Capital</td>
                            <td>{foundCountry.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {foundCountry.name.area}km
                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                {foundCountry.borders.map((countryBorder) => {
          return  <li><Link to={`/CountryDetails/${countryBorder}`}>{borderName(countryBorder)}</Link></li>
        })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    };

    export default CountryDetails;


