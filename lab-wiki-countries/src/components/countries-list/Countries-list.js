import Countries from '../../countries.json'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CountriesList extends Component {
    constructor() {
        super()
        this.state = {
            countries: [...Countries]
        }

    }

    render() {
        return (
            <>
                <div className="col-5" styles="max-height: 90vh; overflow: scroll;">

                    <ul className="list-group">
                        {this.state.countries.map((elm, idx) => {
                            return (
                                <Link to={elm.cca3} className="list-group-item list-group-item-action" key={idx}  > { elm.flag} { elm.name.official}</Link>
                            )
                        })}
                    </ul>
                </div>
            </>
        )
    }



}