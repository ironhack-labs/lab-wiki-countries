import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class CountriesList extends Component {

    // create the countries state
    state = {
        countries: []
    }

    async componentDidMount() {
        // use axios to call a get request
        let response = await axios.get('https://restcountries.eu/rest/v2/all')
        // remember to use .data
        console.log(response.data)
        // update the state created above
        this.setState({
            countries: response.data
        })
    }

    render() {
        // loading message
        if (this.state.countries.length === 0) {
            // remember to return in an if statement
            return <p>Loading. . .</p>
        }

        return (
            <div>
                {
                    // map to return all the available countries
                    this.state.countries.map((country, i) => {
                        // use template literals in the link url to handle the index
                        return <p key={i}><Link to={`/country/${country.alpha3Code}`}>{country.name}</Link></p>
                    })
                }
            </div>
        )
    }
}

export default CountriesList