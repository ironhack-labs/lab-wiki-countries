import { useState, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import countriesArr from "../countries.json";
import CountryDetails from "./CountryDetails"

function CountriesList() {
    const [countriesList, setCountriesList] = useState([])

    useEffect(()=>{
        setCountriesList(countriesArr)
    }, [])

    return (
        <div className='container'>
            <div className="col-5" >
                {countriesList.map((country) => {
                    return (
                        <div key={country.alpha3Code} className="list-group">
                            <NavLink to={`/${country.alpha3Code}`}>{country.name.official}</NavLink>
                        </div>
                    )
                })}
            </div>
            <div className="col-8">
                <Routes>
                    <Route path="/:id" element={<CountryDetails countries={countriesArr} />} />
                </Routes>
            </div>

        </div>
    )
}

export default CountriesList