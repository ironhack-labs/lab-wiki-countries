import React, { Component, Fragment } from 'react';
import countries from '../countries.json'
import { Link } from 'react-router-dom'



// const CountryDetails = (props) => {
//   console.log(props)
//   return (
//     <div>hahah</div>
//   )
// }
// export default CountryDetails


export default class CountryDetails extends Component {

  // componentWillReceiveProps() {
  //   console.log(this.props)
  // }
  // componentDidUpdate() {
  //   console.log(this.props)
  // }
  // componentDidMount() {
  //   console.log(this.props)
  // }
  render() {
    console.log(this.props)
    var theCountry = { name: { common: 'hi' } }
    if (this.props.match) {
      theCountry = countries.find(country => {
        return country.cca3 === this.props.match.params.id
      })
      console.log(theCountry)
    }

    return (
      <Fragment>
        <h1>Country Details: {theCountry.name.common}</h1>
        <h2></h2>
      </Fragment>
    )
  }
}