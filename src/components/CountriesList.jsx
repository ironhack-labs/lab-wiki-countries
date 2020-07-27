import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export class CountriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
    }
    async componentDidMount() {
        const {data: countries} = await axios.get('https://restcountries.eu/rest/v2')
        this.setState(state => ({
            ...state, 
            countries: countries
        }))
    }
    render() {
        const countryList = this.state.countries.map(country => 
                <li className='list-group-item' key={country.alpha3Code}>
                    <Link to={'/' + country.name}>
                        <span>
                            <img src={country.flag} alt="country flag"/>
                        </span>
                        {country.name}
                    </Link>
                </li>
        )
        return (
            <ul className='countryList list-group'>
                {countryList}
            </ul>
        )
    }
}

export default CountriesList
