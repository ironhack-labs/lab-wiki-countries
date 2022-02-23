import './CountriesList.css'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

function CountriesList() {
    return (
        <div className="countriesList">
            <h1>COUNTRIES LIST</h1>
            {countries
                .map((country) => (
                    <div key={country.alpha3Code}>
                        <Link to={`/countriesDetails/${country.alpha3Code}`}>
                            <h5 className='countryCode'>{country.alpha3Code}</h5>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name} />
                        </Link>
                    </div>
                ))}

        </div>
    )
}

export default CountriesList