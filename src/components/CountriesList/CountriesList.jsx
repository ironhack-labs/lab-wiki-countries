import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css'
import countriesArray from "../../countries.json"

function CountriesList() {
    const [countries, setCountries] = useState(countriesArray)

    return (
        <section>
            {countries.map((country) => {
                return (
                    <div>
                        <Link to={`/${country.alpha3Code}`} key={country.alpha3Code}>{country.name.official}</Link>
                    </div>
                )
            })}
        </section>
    )
}


export default CountriesList;