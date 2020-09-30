import React, { Component } from 'react'
import countries from '../../countries.json'
import Country from '../Country/Country.js'
import axios from 'axios'



class CountriesList extends Component {

    constructor() {
        super()
        this.state = {
            countries: countries
        }
    }

    componentDidMount() {
        axios.get('https://countries.tech-savvy.tech/countries')
            .then((res) => {
                console.log("---------------------",res)
                this.setState({
                    countries: res.data
                })
            })
    }
    
    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="list-group">
                            {this.state.countries.map(elm => <Country key={elm.cca3} {...elm} />)}
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}





export default CountriesList
