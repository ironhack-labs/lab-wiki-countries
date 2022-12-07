import CountriesData from '../countries.json'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const CountryDetails = () => {

    const { alpha3Code } = useParams()
    const findCountry = CountriesData.find(e => e.alpha3Code === alpha3Code)
    console.log(CountriesData)
    return (
        <>
            <div key={alpha3Code} className='container'>
                <h1>{findCountry.name.official}</h1>
                <h2> Capital:{findCountry.capital}</h2>
                <h2>Region:{findCountry.region}</h2>
                <h2>Sub-Region:{findCountry.subregion}</h2>
                <h2>Borders: {findCountry.borders.map(e => {
                    return (
                        <Link to={`/details/${e}`}><div>{e}</div></Link>
                    )
                })}</h2>


            </div>


        </>

    )
}

export default CountryDetails