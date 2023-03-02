import { useState } from "react"
import { Link, useParams } from "react-router-dom"

const CountryDetails = ({ countries }) => {

    const { country_id } = useParams()

    const [countriesBackup, setCountriesBackup] = useState(countries)

    const country = countriesBackup.find(elm => elm.alpha3Code === country_id)


    return (
        <div className="col-8">
            <h1>{country.name.official}</h1>
            <p>{country.capital}</p>
            <p>{country.area} km</p>
            {/* <div>
                {country.map(elm => {
                    return (
                        <div>
                            <Link>{elm.borders}</Link>
                        </div>
                    )
                })}
            </div> */}

            <Link className="btn btn-info" to="/">Volver</Link>

        </div>



    )
}

export default CountryDetails