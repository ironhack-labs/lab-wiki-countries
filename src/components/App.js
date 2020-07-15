import React from 'react'
import './App.css'

import CountryList from './country/CountryList'
import CountryDetails from './country/CountryDetails'

function App() {
  return (
    <>
      <main>
        <section>
          <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
              <a class="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>

        </section>
        <secion class="container">

          <CountryList />

        </secion>


      </main>
    </>
  )
}

export default App;
