import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Borders extends Component {
  bordersRender =()=>{
    let picked = []
    let pickingCountries = this.props.data.map((country) => {
      // return <li><Link to={`/${country}`} > {country}   </Link> </li>
      let filteredCountries = this.props.allcountries.map((countries)=> {
      if (countries.cca3 == country) {
        picked.push(countries)
      }
      })
    })
    let rendering = picked.map((eachCountry)=>{
      return (
        <li> <Link to={`/${eachCountry.cca3}`}> {eachCountry.name.common} </Link> </li>
      )
    })
    return rendering
  }
  render() {
    console.log(this.props.allcountries)
    return (
    <ul>
      {this.bordersRender()}
    </ul>
    )
  }
}


