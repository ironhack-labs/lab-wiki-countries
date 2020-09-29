import React from 'react'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import countries from '../countries.json'

const Index = (props) => {
    return (
        <>
            <div className="col-4 countries-list">
                <CountriesList countries={countries} />
            </div>
            <div className="col-7 countries-detail">
                <CountryDetails countries={countries} country={props.match.params.country}/>
            </div>
        </>
    )
}

export default Index