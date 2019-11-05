import React from 'react'
import BoxName from './BoxName'
import { Switch, Route, Link } from 'react-router-dom';

const ListCountries = ({ countries }) => {
    return (
        <div className='col-5'>
            {
                countries.map((country) => {
                    return <BoxName key={country.cca3}><Link to={`/country/${country.cca3}`}>{country.flag}{country.name.common}</Link></BoxName>
                })
                
            }
        </div>
    )
}

export default ListCountries;