import React from 'react'
import { NavLink } from 'react-router-dom'


const CountrySearch = ({countries}) => {
  return(
    <div className="list-group">
      {countries.map((e,i) => {
        return(
        <NavLink className='list-group-item list-group-item-action nav-link' to={`/${e.cca3}`} key={i}><i className={`${e.cca2.toLowerCase()} flag`}></i>{e.name.common}</NavLink>
        )
      })}
    </div>
  )
}

export default CountrySearch