import { useState } from "react"
import { Link } from "react-router-dom"




function CountriesList({countriesJSON}) {

    const [countries, setCountries] = useState(countriesJSON)

    return(
        <div>
            {countries.map((country) => {
                

                return (
                    <div className="CountryCard">
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
                        <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList