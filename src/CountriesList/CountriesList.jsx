import './CountriesList.css'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

function CountriesList() {
    return (
        <div className="countriesList">
            <h1>COUNTRIES LIST</h1>
            {countries
                .map((country) => (
                    <div className='mt-5' key={country.alpha3Code}>
                        <Link to={`/${country.alpha3Code}`}>
                            <div className="card align-items-center" style={{width: "10rem"}} >
                                <img className="mt-5" style={{width: "70px"}} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name} />
                                <div className="card-body">
                                    <h5 className='countryCode text-align-center'>{country.alpha3Code}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}

        </div>
    )
}

export default CountriesList