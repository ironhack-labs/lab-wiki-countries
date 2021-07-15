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
            <div class="col-7">
                <h1>{countryDetails.name}</h1>
                <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{countryDetails.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{countryDetails.area} km<sup>2</sup></td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {countryDetails.borders.map((border) => {
                                        return <li>{border}</li>
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CountryDetails;