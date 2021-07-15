import { Component } from "react";
import countries from './countries.json'
// import { Link } from "react-router-dom";
import Countries from "./Countries";

class CountrieList extends Component {
    constructor() {
        super()
        this.state = { countries }
    }

    render() {
        return (
            <h1>YAY!</h1>,
            this.state.countries.map((elm, index) => <Countries key={index} {...elm} />) // I tried

        )

    }
}

export default CountrieList