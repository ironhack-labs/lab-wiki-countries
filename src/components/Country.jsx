import React, { Component } from 'react'
import axios from 'axios'

export class Country extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: null
        }
    }
    async componentDidMount() {
        try {
            const {id: countryId} = this.props.match.params
            const {data: countries} = await axios.get('https://restcountries.eu/rest/v2/name/' + countryId)
            const [country] = countries.filter(country => country.name === countryId)
            this.setState(() => ({
                country: country
            }))
        } catch (error) {
            console.log(error)
        }
    }
    // async componentDidUpdate() {
    //     try {
    //         this.componentDidMount()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    render() {
        console.log(this.state.country)
        return (
            <div>
                <h1>Country Details: </h1>
                {/* <h2>{this.state.name}</h2> */}
            </div>
        )
    }
}

export default Country
