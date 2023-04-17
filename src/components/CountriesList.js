import React from 'react'
import { Link } from 'react-router-dom'

const CountriesList = ({ countries }) => {
    
    return (
        <div>
            {
                countries.map(country => {
                    return (
                        <Link to={`/${country.alpha3Code}`}>
                            <h2 className='text-light'>{country.name.official}</h2>
                            <h2 className='text-info'></h2>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default CountriesList