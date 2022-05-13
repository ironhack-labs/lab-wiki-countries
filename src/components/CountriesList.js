import { useState, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import countriesArr from "../countries.json";
import CountryDetails from "./CountryDetails"

function CountriesList() {
    const [countriesList, setCountriesList] = useState([])

    useEffect(() => {
        setCountriesList(countriesArr)
    }, [])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }} >
                    <div className="list-group">
                        {countriesList.map((country) => {
                            return (
                                <div key={country.alpha3Code} className="list-group-item list-group-item-action">
                                    <img style={{ maxHeight: "5vh", objectFit: 'contain' }} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.official} />
                                    <br></br>
                                    <NavLink to={`/${country.alpha3Code}`}>{country.name.official}</NavLink>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-7">
                    <Routes>
                        <Route path="/:id" element={<CountryDetails countries={countriesArr} />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default CountriesList