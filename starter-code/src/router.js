import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Countries from './pages/Countries'
import Country from './pages/Country'
import 'bootstrap/dist/css/bootstrap.css'

// Dummy components

const AppRouter = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact component={Countries} path="/" />
      <Route exact component={Country} path="/:id" />
    </Switch>
  </Router>
)

export default AppRouter