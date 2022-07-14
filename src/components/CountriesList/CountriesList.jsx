import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function CountriesList({ countriesData }) {

    const [countries, setCountries] = useState(countriesData)

    useEffect(() => {
        setCountries(countriesData)
    })

    return (
        <div>
            <h2>Countries List</h2>

            {countries.map(country => {
                return (

                    <div>

                        <ul>

                            <Link to={`/${country.alpha3Code}`} key={country.name.official}>

                                <div>

                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                                    <p>{country.name.official}</p>

                                </div>

                            </Link>


                        </ul>

                    </div>
                )
            })}

        </div>
    )
}

export default CountriesList