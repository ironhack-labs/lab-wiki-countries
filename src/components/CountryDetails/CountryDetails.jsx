import ContriesArray from './../../countries.json'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const CountryDetails = () => {
    const [country, setCountry] = useState(ContriesArray)
    const { alpha3Code } = useParams()
    const findCountry = country.find(elm => elm.alpha3Code === alpha3Code)
    return (
        <>
            <div key={alpha3Code} className='container'>
                <h1>{findCountry.name.official}</h1>
                <h2> Capital:{findCountry.capital}</h2>
                <h2>Region:{findCountry.region}</h2>
                <h2>Sub-Region:{findCountry.subregion}</h2>
                <h2>Borders: {findCountry.borders.map(elm => {
                    return (
                        <Link to={`/details/${elm}`}><div>{elm}</div></Link>
                    )
                })}</h2>


            </div>


        </>

    )
}

export default CountryDetails