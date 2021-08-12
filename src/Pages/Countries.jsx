import React from 'react'
import CountriesList from '../components/CountriesList'

const Countries = props => {

    return (
        <div>
            <CountriesList countries={props.countries}/>
        </div>
    )
}

export default Countries
