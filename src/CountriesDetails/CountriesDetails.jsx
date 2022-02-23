import { useParams } from 'react-router'
import countries from '../countries.json'


function CountriesDetails() {
    const { alpha3Code } = useParams()
    const country = countries.find((country) => country.alpha3Code === alpha3Code)
    return (
        <div className="countriesDetails">
            <h1>src={country.alpha3Code}</h1>
        </div>
    )
}


export default CountriesDetails