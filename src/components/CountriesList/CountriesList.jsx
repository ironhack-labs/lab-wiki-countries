import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getCountries } from "../../services/CountriesServices"
import { Routes, Route } from 'react-router-dom';
import CountryDetails from '../CountryDetails/CountryDetails';

const CountriesList = () => {
    const [ countries, setCountries ] = useState([])

    useEffect(() => {
        getCountries()
            .then((countries) => {
                setCountries(countries)
            })
    }, [])

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    {countries.map(country => {
                        return(
                            <div key={country._id}>
                                <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                            </div>
                        )
                    })}
                </div>
                <div className="col-8">
                    <Routes>
                        <Route path="/:id" element={<CountryDetails countries={countries}/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default CountriesList