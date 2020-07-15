import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'

import CountryList from './country/CountryList'
import CountryDetails from './country/CountryDetails'

function App(props) {
  return (
    <>
      <main>
        <section>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>

        </section>
        <section className="container">
          <article className="row">
            <CountryList />
            <BrowserRouter>
              <Switch>
                <Route path="/countries/:id" exact render={() => <CountryDetails {...props} />} />
              </Switch>
            </BrowserRouter>
          </article>
        </section>


      </main>
    </>
  )
}

export default App;
