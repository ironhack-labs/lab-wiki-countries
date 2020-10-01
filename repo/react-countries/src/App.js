import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/navBar/NavBar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

import { Switch, Route, Redirect } from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <Route exact path="/" render={() => <CountriesList />} />
                <Switch>
                    <Route path="/:id" render={props => <CountryDetails {...props} />} />
                </Switch>
            </Fragment>
        );
    }
}

export default App;