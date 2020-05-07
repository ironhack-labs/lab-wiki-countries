import React, { Component } from 'react';
import './App.css'
import countries from '../countries.json'
import CountryDetail from './countryDetails/CountryDetail'
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {

    constructor() {
        super()
        this.countriesCopy = [...countries]
        this.state = {
            countries: this.countriesCopy
        }
    }

    render() {
        return (
            <div className="App">
                <div>

                    <nav className="navbar navbar-dark bg-primary mb-3">
                        <div className="container">
                            <a className="navbar-brand" href="/">WikiCountries</a>
                        </div>
                    </nav>

                    <div className="container">
                        <div className="row">

                            <div className="col-5" style={{ maxHeight: 90 + 'vh', overflow: 'scroll' }}>
                                <div className="list-group">
                                    {this.state.countries.map(country => {
                                        return (
                                            <Link
                                                to={`/${country.cca3}`}
                                                key={country.cca3}
                                                className="country-link list-group-item list-group-item-action">
                                                {country.flag} {country.name.common}
                                            </Link>)
                                    })}
                                </div>
                            </div>

                            <div className="col-7">
                                <Switch>
                                    <Route path="/:cca3" render={(props) => <CountryDetail {...props}/>} />
                                </Switch>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default App;
