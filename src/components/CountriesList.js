import { Component } from "react"
import { Link } from 'react-router-dom'
import countries from './../countries.json'

class CountriesList extends Component {

    constructor() {
        super()
        this.state = {
            countries: countries
        }
    }

    render() {
        
        return this.state.countries.map((elm) => <p>{elm.cca3} {elm.flag} <Route to='/countrydetails/:country' render={props => <RouteParams {...props} />}> {elm.name.common}</Route></p>)
        
    }
}


export default CountriesList