import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const CountryDetails = ({ countries }) => {

    const { id } = useParams()
    const country = countries.find(e => e.alpha3Code === id)
    const flag = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`

    return (
        <div className='col-6'>
            <div>
                <img src={flag} alt="flag" />
            </div>
            <h1>{country.name.official}</h1>
            <p><span>Capital: </span>{country.capital}</p>
            <p><span>Area: </span>{country.area} km^2</p>
            <Link><span>Borders: </span>{country.borders.map(e => {
                return (
                    <p>{e}</p>
                )
            })}</Link>
        </div>
    )


}

export default CountryDetails