import React, { Component, Fragment } from 'react';
import countries from '../countries.json'
import { Link } from 'react-router-dom'

export default class CountryList extends Component {


  render() {
    // console.log(countries)
    return (
      <Fragment>
        <h1>List Of Countries</h1>
        <ul className='list-group'>
          <li className='list-group-item '>
            {countries.map(country => {
              return <div>{country.flag} <Link to={`/CountryDetails/${country.cca3}`}>{country.name.official}</Link></div>
            })}
          </li>
        </ul>
      </Fragment>
    )
  }
}