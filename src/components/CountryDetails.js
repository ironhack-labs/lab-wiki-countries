import React from 'react';
import { userParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiCountries from '../utlis/apiCountries';


export const CountryDetails = ({ countries }) => {

    const [country, setCountry] = useState({})

    const {id} = userParams()

    const getcountry = async (id) => {
        const data = await apiCountries.getOneCountry(id)
        setCountry(data)
    }

    useEffect(() => {
        getcountry(id)
    }, {id})

    return (
        <div className='col-7'>
            <h1>{country.name && country.name.cammon} </h1>
            <table className='table'>
                <thead />
                <tboody>
                    <tr>
                        <td style={{width: '30%'}}>Capital</td>
                        <td>{country.capital && country.capital [0]}</td>
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
                                {country.borders && country.borders.map(cca3 => {
                                    return (
                                        <li key= {cca3}>
                                            <link to={'/${cca3}'}>
                                                {countries.find(country => country.alpha3code === cca3).name.cammon}
                                            </link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </td>
                    </tr>
                </tboody>
            </table>
        </div>
    );
}