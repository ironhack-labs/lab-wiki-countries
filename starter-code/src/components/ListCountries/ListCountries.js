import React, { Component } from 'react'
import './ListCountries.css';
import { Link } from 'react-router-dom';

export default class ListCountries extends Component {
  render() {
    return (
      <div>
        <Link to={`/countrydetail/${this.props.cca3}`} style={{ textDecoration: 'none' }}>
          <div>
            <div className="boxCountry" >
              <span>{this.props.flag}</span>
              <p>{this.props.name.common}</p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
