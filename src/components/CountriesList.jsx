import React, { Component } from 'react'
import Country from './Country'
import axios from 'axios'

export class CountriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
    }
    
    componentDidMount() {
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(({data}) => this.setState({countries: data}))
            .catch(err => console.error("An error has occurred when obtaining the list of countries", err))
    }



    render() {

        const data = this.state.countries
        const renderCountryList = data.map(country => <Country country={country} key={country.alpha3Code}/>)

        return (
            <div className="col" id="country-list">
                <ul className="list-group" >
                    {renderCountryList}
                </ul>
            </div>
        )
    }
}

export default CountriesList
