import CountryCard from './CountyCard'
import { useState } from 'react'
import countries from '../countries.json'
import { Link } from "react-router-dom"
import CountryDetails from './CountryDetails'

const CountriesList = () => {
    const [country, setCountries] = useState(countries)


    return (
        <>

            {
                country.map(elm => <div className="container" key={elm._id}>
                    <div className="row">
                        <div className="col-5" >
                            <div className="list-group">
                                <Link to={`/${elm.alpha3Code}`} className="list-group-item list-group-item-action">{elm.name.official}</Link>
                            </div>
                        </div>
                    </div>
                </div >)
            }
        </>
    )
}

export default CountriesList