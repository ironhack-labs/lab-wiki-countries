import axios from 'axios'
import React, { Component } from 'react'

class CountryDetails extends Component {
    
    // create the country details state
    state = {
        countryDetails: null
    }

    getData = async () => {
        // create the cca3 id
        let cca3 = this.props.match.params.cca3
        // axios get request
        let response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${cca3}`)
        // country details
        let country = {
            id: this.props.match.params.cca3,
            name: response.data.name,
            capital: response.data.capital,
            area: response.data.area,
            borders: response.data.borders
        }
        // update state
        this.setState({
            countryDetails: country
        })
    }

    componentDidMount() {
        this.getData()
    }

    componentDidUpdate() {
        let newId = this.props.match.params.cca3
        let stateId = this.state.countryDetails.id
        if (newId !== stateId) {
            this.getData()
        }
    }

    render() {
        if (!this.state.countryDetails) {
            return <p>Loading Details. . .</p>
        }

        const {countryDetails} = this.state

        return (
            <div>
                <h2>{countryDetails.name}</h2>
                <h3>Capital: {countryDetails.capital}</h3>
                <h3>Area: {countryDetails.area} km</h3>
                {/* how could we hide if empty? */}
                <h3>Borders:</h3>
                <ul>
                    {countryDetails.borders.map((border) => {
                        return <li>{border}</li>
                    })}
                </ul>               
            </div>
        )
    }
}

export default CountryDetails;