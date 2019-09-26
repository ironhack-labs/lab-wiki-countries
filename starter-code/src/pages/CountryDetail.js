import React, {Component} from 'react'
import Layout from '../components/Layout/Layout'
import CountryCard from '../components/Country/CountryCard'
import countries from '../countries.json'

class CountryDetail extends Component {
  state={
    country: countries.filter((country) => country.cca3 === this.props.match.params.cca3)
  }
  getCountry = () => {
    this.setState({
      country: countries.filter((country) => country.cca3 === this.props.match.params.cca3)
    })
  }
  componentDidUpdate(){
    this.props.match.params.cca3 !== this.state.country[0].cca3 && this.getCountry()
  }
 
  render(){
    const{country} = this.state
    return (
      <Layout>
        <CountryCard country={country[0]}/>
      </Layout>
    )
  }
}

export default CountryDetail
