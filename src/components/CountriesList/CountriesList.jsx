import { useState } from "react"
import { Link } from "react-router-dom";
import countriesArray from '../../countries.json'


const CountriesList = () => {

    const [countries, setCountries] = useState(countriesArray)

    return (

        <section>

            {countries.map((country) => {
                return (
                    <>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                        <div key={country.alpha3Code} >
                            <Link to={`/countries/${country.alpha3Code}`}>{country.name.official}</Link>
                        </div>
                    </>
                )
            })}
        </section>
    )
}

export default CountriesList