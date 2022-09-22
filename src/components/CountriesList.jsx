import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'


export default function CountriesList(props) {
  const {countries} = props
  return (
    <ul className="main-list">
      {countries.map(country => {
        return (
        <li key={country.alpha3Code}><Link to={country.alpha3Code}><span>{country.name.official}</span></Link></li>
        )
      })}
    </ul>
  )
}