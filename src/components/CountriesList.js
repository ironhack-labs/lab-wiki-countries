import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json'

const CountriesList = () => {

    const newCountries = countries;

    return (
        <div class="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            { newCountries.map((eachCountry, index) => {
                return (
                        <div key={index}>
                            <div class="list-group">
                                <Link 
                                    className="list-group-item list-group-item-action"
                                    to={`/${eachCountry.cca3}`}
                                >
                                    <span role="img">{eachCountry.flag}</span> {eachCountry.name.common}
                                </Link>
                            </div>
                        </div>
                )
            })}
        </div>
    )
};

export default CountriesList

