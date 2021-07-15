import React, { Component } from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'

class CountryDetails extends Component {
    state = {
        countryDetails: null
    }

    getData = async () => {
        let id = this.props.match.params.countryId
        let response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${id}`)

        let borders = await response.data.borders.map(async (countryCode) => {
            let response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
            return {id: countryCode, name: response.data.name}
        })

        let country = {
            id: this.props.match.params.countryId,
            name: response.data.name,
            capital: response.data.capital,
            area: response.data.area,
            borders: await Promise.all(borders)
        }

        this.setState({
            countryDetails: country
        })
    }

    componentDidMount(){
        this.getData()
    }

    componentDidUpdate(){
        let newId = this.props.match.params.countryId
        let stateId = this.state.countryDetails.id
        if(newId !== stateId) {
            this.getData()
        }
    }

    render() {
        if (!this.state.countryDetails) {
            return <p>Loading Country Details. . . </p>
        }

        return (
            <div style={{margin: "20px"}}>
                <h1>{this.state.countryDetails.name}</h1>
                <hr/>
                <p>Capital: {this.state.countryDetails.capital}</p>
                <hr/>
                <p>Area: {this.state.countryDetails.area} qkm</p>
                <hr/>
                <div>
                <p>Borders:</p>{this.state.countryDetails.borders.map((country) => {
                        return <ul><li key={country.id}>
                            <Link style={{textDecoration: "none"}} to={`/${country.id}`} >{country.name}</Link>
                        </li></ul>
                    })}
                </div>
            </div>
        )
    }
}

export default CountryDetails