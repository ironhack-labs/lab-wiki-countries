import React from 'react'
import CountriesList from './CountriesList/CountriesList'
import NavBar from './NavBar/NavBar'


function App() {

  return (
    <>
      <NavBar />

      <div className="row">
        <CountriesList />
      </div>

    </>
  )
}

export default App
