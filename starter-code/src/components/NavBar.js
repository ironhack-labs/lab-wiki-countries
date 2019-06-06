import React, { Component } from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom';


class Navbar extends Component {

  constructor() {
    super()

    this.state = {
      ourCountries: countries
    }
  }


  render() {
    return (
      <ul>
        {
          this.state.ourCountries.map((eachCountry) => {
            console.log(eachCountry)
            return <li><Link to={`/country/${eachCountry.cca3}`} key={eachCountry.cca3}>{eachCountry.flag}{eachCountry.name.common}</Link></li>
          })
        }
      </ul>
    )
  }
}

export default Navbar
