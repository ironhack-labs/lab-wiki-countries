import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
import App from './App';
import countries from './countries.json';

function Routes () {
    return (
    <BrowserRouter>
        <App>
        <Route 
              exact path="/country/:id" 
              component={(props) => <CountryDetail {...props} countries={countries} />} />
        </App>
    </BrowserRouter>
  )
}

export default Routes