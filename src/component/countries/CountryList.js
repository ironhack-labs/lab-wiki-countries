import React, { Component } from 'react';
import Countries from '../countries.json'
import { Link } from 'react-router-dom'


class CountriesList extends Component {

    constructor() {
        super()
        this.state = {
            countries: Countries
        }
    }


    render() {

        return (

            Countries.map((elm, idx) => <Link key={idx} className="list-group-item list-group-item-action" to={elm.cca3}>{elm.flag} {elm.name.official}</Link>)
        )

    }
}

export default CountriesList;

