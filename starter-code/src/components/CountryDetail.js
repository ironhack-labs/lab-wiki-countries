import React, { Component } from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

class CountryDetail extends Component {
    constructor() {
        super();
        this.state = {
            countriesInfo: countries
        }
    }

    countriesList = () => {
        let countryList = this.state.countriesInfo.map((eachCountry) => {
            console.log(eachCountry)
            return <li><Link to={`details/${eachCountry.cca3}`}>{eachCountry.flag}{eachCountry.name.common} </Link></li>
        }); return countryList

    }


    render() {
        return (
            <>
                {this.countriesList()}
            </>
        )
    }
}


export default CountryDetail