import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


const CountryDetail = (props) => {

    let getCountry = (cca3) => countries.find((obj) => obj.cca3 === cca3);
    const { params } = props.match;

    const foundCountry = getCountry(params.cca3);


    return (
        <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
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
                                {foundCountry.borders && foundCountry.borders.map((borders, index) => {
                                    let countryBorders = countries.find((el) => el.cca3 === borders)
                                    return (

                                        <li key={index}>
                                            <Link to={countryBorders.cca3}>
                                                {countryBorders.name.common}
                                            </Link>
                                        </li>

                                    )
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
export default CountryDetail;