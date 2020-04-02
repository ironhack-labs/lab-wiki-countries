import React from "react";
import { NavLink } from "react-router-dom";
import countries from '../countries.json'

const CountryDetail = props => {

    const getCountry = cca3 => countries.find(obj => obj.cca3 === cca3);

    const { params } = props.match;

    const foundCountry = getCountry(params.cca3);
   // console.log(foundCountry.borders)

    let borders = foundCountry.borders;

    let countriesCode = borders.map(countryCode => getCountry(countryCode).name.common)

    console.log(countriesCode)

    return (
        <div className="col-7">
            <h1> {foundCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{foundCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{foundCountry.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                            {countriesCode.length > 0 ? countriesCode.map(countryName => <li>{countryName}</li>): <li>It has no borders</li>}
                            {console.log(countriesCode)} 
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <NavLink to='/'>Back</NavLink>
        </div>

    );
};

export default CountryDetail;
