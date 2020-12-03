import React, { Component } from 'react'

import countries from './../countries.json'
import CountryDetails from './CountryDetails'





class CountriesList extends Component {

    constructor() {
        super()
        this.state = {
            countries
            
        }
    }

    render() {


        return (

            <section>
                <>
                {this.state.countries.map((elm, idx) => <CountryDetails key={idx} name={elm.name.official} flag={elm.flag} cca3={elm.cca3} />)}
                </>

            </section>
        )
    }
}

export default CountriesList