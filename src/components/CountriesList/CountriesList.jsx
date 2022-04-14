import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {countriesList} from '../services/countriesService/CountriesService';
import './CountriesList.scss';

const CountriesList = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        countriesList()
            .then(countriesFound => setCountries(countriesFound))
    }, [])

    return (
        <div className="countries-list">
            {countries.map(country => {
                return(
                    <div 
                        key={country._id}
                        className="countryItem">
                        <div style={{
                            maxHeight: "90vh", 
                            overflow:"scroll"}}
                        >
                            <div>
                                <Link 
                                    className="list-group-item list-group-item-action"
                                    to={`/countries/${country.alpha3Code}`}
                                >
                                    {country.name.common}
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList; 