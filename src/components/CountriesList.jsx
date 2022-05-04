import { Link } from 'react-router-dom'

function CountriesList({ countries }) {
    return (

        countries.map(country => {


            return (
                <nav className="CountriesList">
                    <ul>
                        <li>
                            <Link key={country.alpha3Code} to={`/${country.alpha3Code}`} >
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











