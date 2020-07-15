import React, { Component } from 'react'
import ReactCountryFlag from "react-country-flag"

import countries from './../../countries.json'
import './CountryList.css'


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
                <section className="col-md-5">
                    <article className="list">
                        <div className="list-group">
                            {this.state.countries.map((elm, idx) => <span key={idx}>
                                <a href="/" className="list-group-item list-group-item-action">
                                    <ReactCountryFlag countryCode={elm.cca2} /> &nbsp;
                                 {elm.name.common}</a></span>)}
                        </div>
                    </article>
                </section>
            </>
        )
    }
}

export default CountryList