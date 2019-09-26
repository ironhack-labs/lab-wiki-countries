import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import countries from '../countries.json'
import CountryDetail from './components/CountryDetail.js'

const { Content } = Layout

class CountryDetail extends React.Component {
  state = {
    country: undefined
  }
  render() {
    const { countries } = this.state
    return <div></div>
  }
}

export default CountryDetail
