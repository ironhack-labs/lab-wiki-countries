import { NavLink } from 'react-router-dom'
import React from 'react'

import './CountriesList.css'

const CountriesList = (props) => {
        const listOfCountries = props.countries.map( (country) => {
            const { name, alpha3Code } = country
            return <NavLink key={ alpha3Code } to={`/countries/${ alpha3Code }`} className="card link">
                        <div className='card-body'>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="Flag" />
                            <div className='card-title'>
                                { name.official }
                            </div>
                        </div>
                        
                    </NavLink>
        });

        return (
            <div className='overflow-auto column col-sm-3'>
                { listOfCountries }
            </div>
        )
}

export default CountriesList