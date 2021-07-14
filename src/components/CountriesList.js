import { Component } from "react"
import { Route } from 'react-router-dom'
import countries from './../countries.json'

class CountriesList extends Component {

    constructor() {
        super()
        this.state = {
            countries: countries
        }
    }

    render() {

        return this.state.countries.map((elm) => <p>{elm.name.common}</p>)

    }
}


export default CountriesList
