import { Component } from "react"
import { Link } from "react-router-dom"
import countries from '../countries'


class CountriesList extends Component {

    constructor() {
        super()
        this.state = { countries }
    }

    render() {
        return this.state.countries.map((eachCountry) => (<Link class="list-group-item list-group-item-action" to={eachCountry.cca3} > {eachCountry.name.common}</Link>)
        )
    }
}

export default CountriesList