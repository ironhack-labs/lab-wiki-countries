import './CountryDetails.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


function CountryDetails({ countries }) {



    const { id } = useParams()
    const country = countries.find((country) => country.alpha3Code === id)

    return (

        <div className='Flag'>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLocaleLowerCase()}.png`} alt="" />
            <h1>{country.name.official}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} Km2</p>
            <p>Borders:</p>
            <div className='Borders'>
                <p><Link to={country.borders}>{country.borders}</Link></p>

            </div>
        </div>

    )
}

export default CountryDetails