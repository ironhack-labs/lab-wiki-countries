import React from 'react'
import { useParams, Link } from "react-router-dom";
// import { useState, useEffect } from 'react'; 

function CountryDetails({ countryItems }) {

    const { countryId } = useParams();

    const foundCountry = countryItems.find((oneCountry) => {
        return oneCountry.alpha3Code === countryId;
    });

    return (
        <div className="col-7 country-detail-box">
            {!foundCountry && <h3>Country not found!</h3>}
            {foundCountry && (
                <>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} width="250px" alt="" />
                    <h1>{foundCountry.name.common}</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Capital:</b></td>
                                <td>{foundCountry.capital}</td>
                            </tr>
                            <tr>
                                <td><b>Area:</b></td>
                                <td>{foundCountry.area}
                                    <sup>2</sup></td>
                            </tr>
                            <tr>
                                <td><b>Borders:</b></td>
                                {/* <td>
                                    {countryItems.map((countryItem) => (
                                        <div key={countryItem.alpha3Code}>
                                            {countryItem.borders.map((border) => (
                                                <Link to={`/${border.alpha3Code}`} >
                                                    {border.name.common}
                                                </Link>))}

                                        </div>
                                    ))}
                                </td> */}
                            </tr>
                        </tbody>
                    </table>
                </>
            )
            }
        </div >
    );
}

export default CountryDetails;
