import { Link } from "react-router-dom"

const CountryLi = ({ name, alpha3Code, alpha2Code }) => {
    const link = `/countriesList/${alpha3Code}`
    const flagLink = `https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`
    return (
        <ul>
            <li>
                <div>
                    <Link to={link}> {name.common}</Link>
                    <p><a target="_blank" href={flagLink}>Flag</a></p>
                </div>
            </li>
        </ul>
    )
}

export default CountryLi