import { useState } from "react"
import { Link } from "react-router-dom"




function CountriesList({ countriesJSON }) {

    console.log(countriesJSON)

    const [countries, setCountries] = useState(countriesJSON)

    return (
        <div>
            <h2>Countries</h2>
            {/* <Link to="/">Home Page</Link> */}

            <hr />
            {countries.map((country) => {
                return (
                    <div>
                        <Link to={country.alpha3Code}>{country.name.common}</Link>
                    </div>
                )
            })}
        </div>

    )


}

export default CountriesList