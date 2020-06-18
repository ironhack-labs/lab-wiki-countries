import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail'
import axios from 'axios'

let countries = [];

  axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
  .then((response) => {
    countries = response.data;
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={CountriesList} />
          <Route path={'/:cc'} component={CountriesList} />
        </Switch>
      </BrowserRouter>,
      document.getElementById('root')
    );
  })


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
