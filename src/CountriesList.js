import { Component } from "react"
import CountryDetails from "./CountryDetails"
import countries from './countries.json'


class CountryList extends Component {

    constructor() {
        super()
        this.state = {
            currentCountries: countries

        }

    }

    render() {
        return (
            <>
                {this.state.currentCountries.map(elm => <CountryDetails {...elm} />)}


            </>


        )

    }

}

export default CountryList