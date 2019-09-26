import React, { Component } from 'react'
import Navbar from './Navbar'
import countries from '../../countries.json'
import {Link} from 'react-router-dom'


class Layout extends Component {
  state = {
    countries
  }
  render() {
    const {countries} = this.state
    return (
      <div>
      <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
              {countries.map(country => (
              <Link key={country.cca3} className="list-group-item list-group-item-action" to={country.cca3}>
                <span role='img' aria-label={country.name.common}>{country.flag}</span>
               {country.name.common}
              </Link>
              ))}
             
            </div>
          </div>
          <div className="col-7">
            {this.props.children}
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  }
}

export default Layout;