import React, { Component, Fragment } from 'react'
//import { BrowserRouter, Route, Link } from 'react-router-dom'
import country from '../countries.json'
import CardDetails from '../CardDetails/CardDetails'

class CountryDetails extends Component {
    constructor() {
        super()
        this.state = {
            country: country
        }

    }

    componentDidMount = () => this.state.country


    render() {

        const id = this.props.match.params.id

        return (
            <Fragment>
                <div className="col-4" >
                    <div className="list-group">
                        {this.state.country.filter(elm => elm.cca3.includes(id)).map((elm, index) => <CardDetails {...elm} key={index} />)}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CountryDetails