import React, { Component } from 'react'
import axios from 'axios'

export default class CountryDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countryData: {}
        }
    }

    componentDidMount() {
        // Look for API data with Axios
        axios
        .get("https://restcountries.eu/rest/v2/alpha/" + this.props.countryCode)
        .then(response => {
            this.setState({
                countryData: response.data
            })
        })
        .catch(e => console.log(e))
    }

    render() {

        return (
            <div className="details">
                <h2>{this.state.countryData.name}</h2>
                <p>Capital: {this.state.countryData.capital}</p>
                <p>Area: {this.state.countryData.area} km2</p>
            </div>
        )
    }
}
