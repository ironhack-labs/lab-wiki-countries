import { Link, useParams } from "react-router-dom"
import { useState } from "react"
const CountryDetails = ({ countries }) => {

    const { countryId } = useParams()
    const [flag, setFlag] = useState('')
    const [allCountries, setOneCountry] = useState(countries)

    const countryById = allCountries.find(eachCountry => {
        if (eachCountry.alpha3Code === countryId) {
            return eachCountry
        }
    })
    
    console.log(countryById)

    return (
        < div >
            <div className="col-5 details-group" >
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryById.alpha2Code.toLowerCase()}.png`} />
                <h3>{countryById.name.official}</h3>
                <hr />
                <p>Capital: {countryById.capital}</p>
                <p>Area: {countryById.area}</p>
                <hr />
                <p>Borders: {countryById.borders.map(eachBorder => <Link key={eachBorder} to={`/${eachBorder}`} > {eachBorder} </Link>)}
                </p>
            </div>
        </div >
    )
}


export default CountryDetails