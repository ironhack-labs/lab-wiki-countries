import React, { Component } from 'react'
import ReactCountryFlag from "react-country-flag"
import { Link } from 'react-router-dom'

import countries from './../../countries.json'
import './CountryList.css'
import './CountryDetails'


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
                            {this.state.countries.map((elm, idx) =>
                                <div className="list-group-item list-group-item-action">
                                <Link to={elm.name} key={idx}>
                                    <ReactCountryFlag countryCode={elm.cca2} /> &nbsp;
                                 {elm.name.common}</Link></div>)}
                        </div>
                    </article>
                </section>
            </>
        )
    }
}

export default CountryList