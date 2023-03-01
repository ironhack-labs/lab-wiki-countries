import { useParams } from 'react-router-dom'
import './CountryDetails.css'
import { Link } from 'react-router-dom'

const CountryDetails = ({ countriesFromDb }) => {

    const { id } = useParams()
    const country = countriesFromDb.find(elem => elem.alpha3Code === id)

    return (
        <div className='CountryDetails'>
            <h2>CountryDetails {id}</h2>
            <article className='CountryCard'>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                < h2 > {country.name.official}</h2>
                <h3>Capital: {country.capital}</h3>
                <h3>Area: {country.area}</h3>
                <h3 className='borders'>Borders: {country.borders.map((elem) => {
                    return (
                        <td className='bordersList'>
                            <tr><Link to={`/${elem}`} key={`/${elem}`} className='countryBorder'>{elem}</Link></tr>
                        </td>
                    )
                })}
                </h3>
            </article>
        </div >
    )
}

export default CountryDetails