import React from 'react';
import { Switch, Route } from 'react-router-dom'

import CountriesList from './CountriesList'
import CountryDetail from './CountryDetail'

import './App.css';

function App() {
    return (
        <main>

            <Switch>
                <Route path="/" exact render={() => <CountriesList />} />
                <Route path="/:cca3" exact render={() => <CountryDetail />} />

            </Switch>


        </main>
    );
}

export default App;
