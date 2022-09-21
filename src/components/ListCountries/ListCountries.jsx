import { Link } from 'react-router-dom'
import './ListCountries.css'

const ListCountries = ({ countries }) => {
    return (
        countries.map((country) => {
            return (
                <Link to={`/${country.alpha3Code}`} className="list-group list-group-item-action align-items-center" key={country.alpha2Code}>
                    <img src={`https://flagpedia.net/data/flags/w702/${country.alpha2Code.toLowerCase()}.webp`} className="w-25 " />
                    {/* <img src={`https://flagpedia.net/data/flags/icon/72x54/${country?.alpha2Code.toLowerCase()}.png`} alt="" /> */}
                    {country.name.common}
                </Link>
            )
        })
    )
}

export default ListCountries


