import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SideBarEntry extends Component {
  render () {
    let countryCode = this.props.country.cca2.toLowerCase()
    let img_url = 'https://www.countryflags.io/' + countryCode + '/flat/64.png'
    console.log(img_url)
    return (
      <div>
        <Link
          to={`/CountryDetail/${this.props.country.cca3}`}
          className='list-group-item list-group-item-action'
        >
          <img src={img_url} alt='noPic'></img>
          {this.props.country.name.common}
        </Link>
      </div>
    )
  }
}
