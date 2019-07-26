import React, { useState, useEffect } from 'react'
import countriesData from './countries.json'
import { Link } from 'react-router-dom'

export default function App() {
  const [countries, setcountries] = useState([])
  useEffect(() => {
    setcountries(prevState => {
      return [...prevState, ...countriesData]
    })
  }, [])
  if (countries) {
    // const getcountry = countries.find(() => countries[0].name.common === 'Mexico')

    return (
      <div>
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {countries.map((countries, i) => (
                <Link key={i} to={`/${countries.cca3}`} className=" col-5 list-group-item list-group-item-action">
                  {countries.name.common}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <div>{console.log('fail')}</div>
  }
}
