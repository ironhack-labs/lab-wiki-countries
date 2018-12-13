import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Welcome to WikiCountries</h1>
    <Link to='/countries'>
      <button>Show more</button>
    </Link>
    <Link to={`/countries/${Math.floor(Math.random()*3)+1}`}>
      <button>Random country</button>
    </Link>
  </div>
)

export default Home