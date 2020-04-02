import React from 'react'
import countries from '../countries.json';
import { Link } from 'react-router-dom';

function CountryDetails() {
const countryCopy = [...countries];



    return (
        <div className='row'>
            <div className='col-5'>
            <div className='list-group'>
                <h2>Countries details:</h2>
                    {countryCopy.map(countryCode => {
                    return (
                        <a href='/' class="list-group-item list-group-item-action">
                        <div key={countryCode.cca3}>
                            <h3><Link to={`/${countryCode.cca3}`}>{countryCode.flag} {countryCode.name.common}</Link></h3>
                        </div>
                        </a>
                    )
                    } )}
               
                </div>
            </div>
        </div>
    
    )
            }

export default CountryDetails;