import { Link } from "react-router-dom"
import './CountriesList.css'

const CountriesList = ({ countries }) => {
    return (
        <div className="countries-table">
            {
                countries.map(({ alpha2Code, name, alpha3Code }) => {
                    return (
                        <div className="country-card" key={alpha3Code}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt="flag" />
                            <Link to={`/country/${alpha3Code}`}>
                                <p>{name.common}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CountriesList