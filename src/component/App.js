import React from 'react';
import CountriesList from './CountriesList';
import {Route} from 'react-router-dom';
import CountryDetail from './CountryDetail'

export default class App extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary mb-3">
                <div className="container">
                    <a className="navbar-brand" href="#">WIKICOUNTRIES</a>
                </div>
            </nav>
                <CountriesList />
                <div className = "col-7">
                <Route exact path="/countries/:id" component = {CountryDetail} />
                </div>
            </div>
        )
    }
}