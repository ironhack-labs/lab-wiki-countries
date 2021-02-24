import { Component } from 'react'
import countries from './../countries.json'
import CountryDetails from './CountryDetails'
import { Link, Switch, Route } from 'react-router-dom'

import './CountriesList.css'

class CountriesList extends Component {
    constructor() {
        super()
        this.state = {
            countries,
            country: []
        }

    }

    viewCountry(country) {

        console.log(country)
        const countrycopy = this.state.countries.filter(elm => elm.cca3 === country.cca3)
        console.log(countrycopy)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-5 column">
                        <div className="list-group">
                            {this.state.countries.map(elm => {
                                return (
                                    <li key={elm.cca3}>
                                        <Link to={`/${elm.cca3}`}> {elm.flag}{elm.name.common}</Link>
                                        <hr></hr>
                                    </li>
                                )
                            })}
                        </div>
                    </div>

                    <Switch>
                        <Route path="/:cca3" render={props => < CountryDetails cca3={props.match.params.cca3} />} />
                    </Switch>
                </div>
            </div >
        )
    }
}

export default CountriesList

