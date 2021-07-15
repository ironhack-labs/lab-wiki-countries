import { Component } from "react"
import countries from "../data/countries.json"
import { Link } from 'react-router-dom'

class CountriesList extends Component {
    constructor() {
        super()
        this.state = { countries }
    }

    render() {
        return (
                <div>
                {this.state.countries.map(elm =>
                <div key={elm.cca3}>
                <Link to={`/${elm.cca3}`}>{elm.flag} {elm.name.common}</Link>
                </div>)}</div>
        )
    }
}

export default CountriesList;

