import React, { Component } from 'react'
import Layout from '../components/Layout/Layout'
import CountryCard from '../components/Country/CountryCard'
import countries from '../countries.json'

export default class CountryDetail extends Component {
  state = {
    country: []
  }

  getCountry = () => {
    this.setState({
      country: countries.filter(country => country.cca3 === this.props.match.params.cca3)
    })
  }

  componentDidMount() {
    this.getCountry()
  }

  componentDidUpdate() {
    this.props.match.params.cca3 !== this.state.country[0].cca3 && this.getCountry()
  }

  render() {
    const { country } = this.state

    return <Layout>{country.length > 0 ? <CountryCard country={country[0]} /> : <p>Loading..</p>}</Layout>
  }
}
