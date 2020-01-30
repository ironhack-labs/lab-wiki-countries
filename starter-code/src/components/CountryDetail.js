import React, { Component } from 'react';
import data from '../data/countries.json'
import { Route, Link } from "react-router-dom";
import CountryInfo from './CountryInfo.js';

class CountryDetails extends Component {

  state = {
    countries: []
  }

  componentDidMount(){
    fetch(data)
      .then(res => JSON.stringify())
      .then(countries => {
        this.setState({ countries: [...data] })
      })
  }

  render(){
    const { countries } = this.state
    return(
      <div className="container mt-4 pt-4">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {countries ? (
                countries.map((country, index) => {
                  return (
                    <Link
                      className="list-group-item text-left" 
                      key={index}
                      to={`/${country.cca3}`}>
                        <span className="mr-2">{country.flag}</span>
                        {country.name.common}
                    </Link>
                  )
                })
              ) : (
                <div>Loading......</div>
                )
              }              
            </div>
          </div>

          <div className="col-7">
            <Route
              path="/:countryCca3"
              component={CountryInfo}
            />
          </div>

        </div>
      </div>
    )
  }
}
export default CountryDetails