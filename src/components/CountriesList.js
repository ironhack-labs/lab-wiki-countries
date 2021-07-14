// import { Link } from 'react-router-dom'
import countries from "../countries.json"
import { Component } from "react";
import CountryDetails from './CountryDetails';

class CountriesList extends Component {

    constructor() {
        super()
        this.state = { countries }
    }
    render() {
        return (
            <>
                {this.state.countries.map((country) =>
             
                    <CountryDetails name={country.name.common} cca3={country.cca3} />)
                    /* < Link to="/{country.cca3}"> {country.cca3}  </Link> */
                }
            </>
        )
    }
}

export default CountriesList