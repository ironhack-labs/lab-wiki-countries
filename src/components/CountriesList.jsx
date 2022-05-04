import { Link } from 'react-router-dom'
import './CountriesList.css'

function CountriesList({ countries }) {
    return (

        countries.map(country => {


            return (

                <nav className="CountriesList">
                    <ul>
                        <li key={country.alpha3Code}>
                            <Link to={`/${country.alpha3Code}`}>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                                <p>{country.name.common}</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            )
        })
    )
}

export default CountriesList;