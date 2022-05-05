import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import './Country-details.css'
const CountryDetails = ({ contriesData }) => {
    const { countryId } = useParams()
    const [allCountries, setOneCountry] = useState(contriesData)


    const idCountry = allCountries.find(eachCountry => {
        if (eachCountry.alpha3Code === countryId) {
            return eachCountry
        }
    })
    const secondId = idCountry.alpha2Code.toLowerCase()
    return (
        < div >
            <div className="country-details">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${secondId}.png`} alt={idCountry.name.official} />
                <h3>{idCountry.name.official}</h3>
                <hr />
                <p>Capital: {idCountry.capital}</p>
                <p>Area: {idCountry.area}</p>
                <hr />
                <p>Borders: {idCountry.borders.map(eachBorder => <Link key={eachBorder} to={`/${eachBorder}`} className='border-list'> {eachBorder} </Link>)}</p>
            </div>
        </div >
    )
}


export default CountryDetails

