import axios from 'axios';

import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom'

function CountryDetails() {

    const {countryId} = useParams();

    const [countryDetails, setCountryDetails] = useState(null)

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then((response) => {
                setCountryDetails(response.data)
            })
            .catch((e) => {
                console.log(e);
            })
    }, [countryId])

    return (
        <div className='country-details-page'>
            <h1>Country Details</h1>
            <div>
                {countryDetails === null
                    ? <p>Loading...</p>
                    : <div className='country-details'>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} alt='country flag'/>
                        <h1>{countryDetails.name.common}</h1>
                        
                        <table className='country-details-table'>
                            <tbody>
                                <tr>
                                    <td>Capital:</td>
                                    <td>{countryDetails.capital}</td>
                                </tr>
                                <tr>
                                    <td>Area:</td>
                                    <td>{countryDetails.area} km<sup>2</sup></td>
                                </tr>
                                <tr>
                                    <td>Borders:</td>
                                    <td>{countryDetails.borders.map((border) => {
                                            return (
                                                <NavLink to={`/${border}`}>
                                                    <h2>{border}</h2>
                                                </NavLink>
                                            )
                                        })}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
        
                      </div>
                }
            </div>
            <NavLink to='/' className='nav-link'>
                <p>Home</p>
            </NavLink>
        </div>
    )
}

export default CountryDetails;
