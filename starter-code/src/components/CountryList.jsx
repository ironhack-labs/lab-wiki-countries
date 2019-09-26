import React, { Component } from 'react'
import Country from "./Country"

export default class CountryList extends Component {
    render() {
        const countries = this.props.countries
        return (

            <div>
                {countries.map (country => (
                    <Country country = {country} key = {country.cca3}/>
                ))}
            </div>
        )
    }
}
