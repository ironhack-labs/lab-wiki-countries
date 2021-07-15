import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class CountriesList extends Component {

    state = {
        countries: []
    }

    async componentDidMount(){
        let response = await axios.get('https://restcountries.eu/rest/v2/all');
        this.setState({
            countries: response.data
        })
    }

    render() {

        if (this.state.countries.length == 0){
            return <p>Loading...</p>
        }

        return (
            <div>
               
                {
                    this.state.countries.map((country, i) => {
                        return <p key = {i}>
                            <Link to = {`/country/${country.alpha3Code}`} > {country.name}</Link>
                        </p>
                    })
                }
            </div>
        )
    }
}
export default CountriesList;