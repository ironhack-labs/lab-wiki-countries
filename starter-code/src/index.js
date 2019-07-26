import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CountryDetail from './components/CountryDetail'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
      <Route exact path="/:cca3" component={CountryDetail} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
