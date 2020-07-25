import React, { Component } from 'react'
import axios from 'axios'
import CountryDetails from './CountryDetails'
import { Link } from "react-router-dom";

export default class Countries extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        // Look for API data with Axios
        axios
        .get("https://restcountries.eu/rest/v2")
        .then(response => {
            this.setState({
                countries: response.data
            })
        })
        .catch(e => console.log(e))
    }

    showDetails(countryCode) {

        this.setState({
            countryCode: countryCode
        })
    }

    render() {

        const allCountries = this.state.countries.map(country => 
            <div key={country.alpha3Code} className="list">
                <img className="flag ml-4" src={country.flag} alt="flag"/>
                <h2>{country.name}</h2>
                <Link to={`/country/${country.alpha3Code}`}>
                <button className="btn btn-primary mb-5 ml-3" onClick={() => this.showDetails(country.alpha3Code)}>See details</button>
                </Link>
            </div>
        )

        let countryDetails = ""
        if(this.state.countryCode) {
            countryDetails =  <CountryDetails key={this.state.countryCode} countryCode={this.state.countryCode} />
        }

        return (
            <div>
                <h1 className="text-center">Countries</h1>
                {countryDetails}
                {allCountries}
            </div>
        )
    }
}
