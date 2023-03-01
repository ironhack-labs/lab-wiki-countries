import { useState } from 'react'
import countries from './../../../src/countries.json'
import { Link } from "react-router-dom"

const CountriesList = () => {
    const [countriesArray, setCountriesArray] = useState(countries)

    return (
        <div className='col-6'>
            <h1>Countries</h1>
            <div>
                {countriesArray.map(({ _id, alpha3Code, alpha2Code, name: { official } }) => {
                    return (
                        <>
                            <p key={_id}>

                                <Link to={alpha3Code}>{official}</Link>
                            </p>
                            <p key={_id}>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt="flat" />

                            </p>
                        </>
                    )
                })}
                <Link to='{/alpha3Code}'> </Link>
            </div>

        </div>
    )
}

export default CountriesList