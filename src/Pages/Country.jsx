import React from 'react'
import CountryDetails from '../components/CountryDetails'
import CountriesList from '../components/CountriesList'
import { withRouter } from 'react-router-dom'

function Country(props) {

    let country = props.location.state

    if(country) country = country.country
    if(!country) country = props.countries.find(c => c.cca3 === props.match.params.id)

   console.log(country)
    return (
        <div style={{display: 'flex', justifyContent:'sapce-evelny', alignItems: 'flex-start'}}>
            <CountriesList countries={props.countries}/>
            <CountryDetails countries={props.countries} country={country}/>
        </div>
    )
}

export default withRouter(Country)
