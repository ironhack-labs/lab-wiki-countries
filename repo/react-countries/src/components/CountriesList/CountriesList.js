import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
//import countries from '../countries.json'
import axios from 'axios'

class CountriesList extends Component {
    constructor() {
        super()
        this.state = {
            countries: []
        }
    }

    componentDidMount = () => {
        axios.get('https://countries.tech-savvy.tech/countries')
            .then(res => {
                const countries = res.data
                const arrCopy = [...this.state.countries]
                arrCopy.push(countries)
                this.setState({ countries: arrCopy })
            })
    }

    render() {

        return (
            <div className="col-13" >
                {this.state.countries.map((el) => (el.map((elm, index) => <Link key={index} className="list-group-item list-group-item-action" to={elm.cca3}> {elm.flag} {elm.name.common} </Link>)))}
            </div>
        )
    }
}

export default CountriesList

