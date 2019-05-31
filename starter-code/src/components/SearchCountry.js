import React from 'react'
import { NavLink } from 'react-router-dom'


const SearchCountry = ({countries}) => {
  return(
    <div className="list-group">
      {countries.map((elem,index) => {
        return(
        <NavLink className='list-group-item list-group-item-action nav-link' to={
          `/${elem.cca3}`
        } key={index}><i className={
          `${elem.cca2.toLowerCase()} flag`}></i>{elem.name.common}</NavLink>
        )
      })}
    </div>
  )
}

export default SearchCountry 