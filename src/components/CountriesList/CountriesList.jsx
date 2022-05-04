import countries from './../../countries.json'
import { Link } from 'react-router-dom'

const CountriesList = () => {

    console.log(countries)
    return (
        <div>
            <h1>PAISES</h1>
            {countries.map(country => {

                return (
                    <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}>
                        <p>{country.name.common}</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default CountriesList