import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getCountries } from "../../services/CountriesServices"
import { Routes, Route } from 'react-router-dom';
import CountryDetails from '../CountryDetails/CountryDetails';
import './CountriesList.scss'

const CountriesList = () => {
    const [ countries, setCountries ] = useState([])

    useEffect(() => {
        getCountries()
            .then((countries) => {
                setCountries(countries)
            })
    }, [])

    return(
        <>
            <div className='CountriesList'>
                {countries.map(country => {
                    return(
                        <Link className='list-container' to={`/${country.alpha3Code}`}>
                            <div className='countries-list' key={country._id}>
                                <img className='country-flag' src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={ country.name.common } />
                                <p>{ country.name.common }</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div>
                <Routes>
                    <Route path="/:id" element={<CountryDetails countries={countries}/>}/>
                </Routes>
            </div>
        </>
    )
}

export default CountriesList