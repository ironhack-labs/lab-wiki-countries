import React from 'react'
import CountryFromList from './CountryFromList'
import countries from '../../countries.json'
import './countriesList.css'

const CountriesList = () => {
    return <div className='list'>{ countries.map((elm, idx) => <CountryFromList key={ idx } { ...elm }></CountryFromList>) }</div>
}

export default CountriesList