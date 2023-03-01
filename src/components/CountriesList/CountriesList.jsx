import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CountriesList.css'


const CountriesList = ({ countriesFromDb }) => {

    const [countries, setCountries] = useState(countriesFromDb)

    return (
        <div className='CountriesList'>
            <h2>Countries</h2>
            {countries.map((elem) => {
                return (
                    <article className='CountriesArt'>
                        <Link to={elem.alpha3Code} key={elem.alpha3Code} className='country'>
                            <h3>{elem.name.common}</h3>
                        </Link>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} alt="" />
                    </article>
                )
            })}
        </div>
    )
}

export default CountriesList