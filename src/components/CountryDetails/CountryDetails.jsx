import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";


const CountryDetails = ({ countries }) => {

    const { id } = useParams()
    const country = countries.find(elm => elm.alpha3Code === id)

    console.log(country)
    return (
        <div className="Details">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
            <p className="mt-5">{country.name.common}</p>
            <p className="mt-5"><b>Capital: </b>{country.capital}</p >
            <p className="mt-5"><b>Area: </b>{country.area}</p >
            {country.borders.map(elm => {
                return <Link to={`/${elm}`} key={elm}>
                    <p>{elm}</p >
                </Link>

            })}
        </div>
    )
}

export default CountryDetails