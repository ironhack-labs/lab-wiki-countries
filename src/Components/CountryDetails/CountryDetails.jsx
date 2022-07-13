import { useParams } from 'react-router-dom'
import './CountryDetails.css'

const CountryDetails = ({ countries }) => {

    const { countries_id } = useParams()

    const CountriesId = countries.find(elm => elm.alpha3Code === countries_id)

    return (

        <div className="CountryDetails">
            <hr />
            <h1>Countries Details</h1>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${CountriesId.alpha2Code.toLowerCase()}.png`} />
            <h4>Country <br />{CountriesId.name.common}</h4>
            <h4>Capital <br /> {CountriesId.capital}</h4>
            <h4>Region <br />{CountriesId.region}</h4>
            <hr />
        </div>
    )
}

export default CountryDetails