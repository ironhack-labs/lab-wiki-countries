import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import CountryDetail from './pages/CountryDetail'

const AppRouter = () => (
  <Router>
    <Navbar />
    <CountryDetail />
    <Switch>
      <Route exact component={CountryDetail} path="/CountryDetail/:cca3" />
    </Switch>
  </Router>
)

export default AppRouter
