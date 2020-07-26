import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
//import Map from './Map'

export class CountriesDetails extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            country: {},
            countryCode: props.match.params.id
        }
    }
  
    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/alpha/' + this.state.countryCode)
            .then((response) => {
                this.setState({ country: response.data });
            });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            axios.get('https://restcountries.eu/rest/v2/alpha/' + this.props.match.params.id)
                .then((response) => {
                    this.setState({ country: response.data });
                });
        }
    }

    render() {

        let name = this.state.country.name
        let capital = this.state.country.capital
        let area = this.state.country.area
        let countryBorders = ''
        if (this.state.country.borders) {
            countryBorders = this.state.country.borders.map((border) => (
                <li key={border}>
                    <Link to={`/${border}`}>{border}</Link>
                </li>
            ));
        }


        return (
            <div>
                <h1>Details </h1>
                <h1>{name}</h1>
                <h4>Capital: {capital}</h4>
                <h4> Area: {area} km2</h4>
                <div>
                    <h3>Borders</h3>
                    <ul>
                        {countryBorders}
                    </ul>
                </div>
                {/* <Map latlng={this.state.country.latlng} /> */}
            </div>
        )

    }
}

export default CountriesDetails
