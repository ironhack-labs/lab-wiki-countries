import React, { Component } from 'react'
import countries from '../../countries.json'
import Country from '../Country/Country.js'



class CountriesList extends Component {

    constructor() {
        super()
        this.state = {
            countries: countries
        }
    }

    render() {

        return (
            <div class="container">
                <div class="row">
                    <div class="col-5">
                        <div class="list-group">
                            {countries.map(elm => <Country key={elm.cca3} {...elm} />)}
                        </div>
                    </div>
                </div>
            </div>
        )

    }


}





export default CountriesList
