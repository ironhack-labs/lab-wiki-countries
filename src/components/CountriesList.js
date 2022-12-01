import { useState } from 'react';
import { Link } from "react-router-dom";
import countriesData from "../countries.json"

function CountriesList() {
    const [countries, setCountries] = useState(countriesData)

    return (
        <section>
            {countries.map((country) => {
                return (
                    <div>
                        <p></p>
                        <Link to={`/${country.alpha3Code}`} key={country.alpha3Code}>{country.name.official}</Link>
                    </div>
                )
            })}
        </section>
    )
}

export default CountriesList;