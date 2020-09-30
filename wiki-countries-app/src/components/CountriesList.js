import React, { Component } from 'react'
import countries from '../countries.json'

import { Switch, Route, Redirect, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';

class CountriesList extends Component {

    constructor() {
        super()

    }

    render() {

        return (
            countries.map(elm => <Link to={elm.cca3} >{elm.flag}{elm.name.common}</Link>)
        )
    }
}

export default CountriesList