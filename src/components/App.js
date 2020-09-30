import React from 'react'
import countries from "../countries.json"
import { Switch, Route } from 'react-router-dom'
import Navbar from "./Navbar/Navbar"
import CountriesList from './CountriesList/CountriesList'
import CountryDetail from './CountryDetail/CountryDetail'


function App() {
  return (
    <>
    <Navbar />
    <main>
     <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route path="/country/:id" render={props => <CountryDetail {...props}/>}/>
          </Switch>
        </div>
      </div>
    </main>
    </>
  );
}

export default App;
