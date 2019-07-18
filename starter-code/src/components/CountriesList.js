import React, { Component } from 'react'
import data from '../countries.json'
import Countries from './Countries.js'
import CountriesDetail from './CountriesDetail.js'

export default class CountriesList extends Component {
  state = {
    countries: data
  }

  render() {
    const { countries } = this.state

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
              <Countries countries={countries} />
            </div>
            <div className="col-7">
              <CountriesDetail />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
