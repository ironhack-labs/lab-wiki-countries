import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './CountryDetails';


function CountriesList(props) {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        setCountries(props.countries)
    }, [props.countries])

    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="list-group" style={{maxHeight: "90vh", overflow: "scroll"}}>
                        {countries.map(country => {
                            return (
                                <div key={country.alpha3Code}>
                                    <Link to={`/country/${country.alpha3Code}`} className="list-group-item list-group-item-action">
                                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="Flag" height="20px" /><br />
                                        {country.name.common}
                                    </Link>
                                </div>
                            )
                        })}
                </div>
            </div>
            <Routes>
                <Route path='/country/:alpha3Code' element={<CountryDetails countries={props.countries} />} />
            </Routes>
            </div>
        </div>
    )
}

export default CountriesList