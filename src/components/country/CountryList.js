import React, { Component } from 'react'
import ReactCountryFlag from "react-country-flag"

import countries from './../../countries.json'


class CountryList extends Component {

    constructor() {
        super()
        this.state = {
            countries,
        }
    }

    render() {
        console.log(countries)
        return (
            <>
                <div class="col-md-5">

                    <div class="list-group">
                        {this.state.countries.map((elm, idx) => <span key={idx}>
                            <a href="/" class="list-group-item list-group-item-action">
                                <ReactCountryFlag countryCode={elm.cca2} /> &nbsp;
                                 {elm.name.common}</a></span>)}
                    </div>
                </div>
            </>
        )
    }
}

export default CountryList