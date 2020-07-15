import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CountryDetail.css'

class CountryDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listCountries: props.listCountries

        }
    }

    render() {
        console.log('PROPS', this.props)
        const {params} = this.props.match
        
        const country = this.state.listCountries.find(country => country.cca3 === params.id)
        console.log('COUNTRY', country)

        return (
            <>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Region: {country.region}</p>
            <p>Bandera: {country.flag}</p>
            
</>
        )
    }


}



export default CountryDetail