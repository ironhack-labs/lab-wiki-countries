import React from 'react'
import './App.css'
import Navbar from './Navbar'
import CountriesList from './CountriesList'
import CountriesDetails from './CountriesDetails'

import 'bootstrap/dist/css/bootstrap.css'


import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <CountriesList />
        </section>
        <section>
          <Switch>
            <Route path="/countries/:cca3" return={() => <CountriesDetails />} />
          </Switch>
        </section>
      </main>
      </>
  )
}


export default App
