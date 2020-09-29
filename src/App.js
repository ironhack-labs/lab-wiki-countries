import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Index from './components/Index'
import Banner from './components/Banner'

function App() {
  return (
    <div className="App">
      <Banner />
        <section className="container app-block">
          <div className="row justify-content-between">
            <Switch>
              <Route exact path="/:country" component={Index} />
            </Switch>
          </div>
        </section>
      <footer>WikiCountries by Andrés Martínez @2020</footer>
      <Redirect to="/ABW" />
    </div>
  )
}

export default App
