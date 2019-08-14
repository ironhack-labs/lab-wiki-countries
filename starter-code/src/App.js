import React, { Component } from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import countries from './countries.json'
import Card from './components/card'
import CountryDetail from './components/CountryDetail'

class App extends Component {

  constructor(){
    super()

    this.state= {
      countries
    }
  }
  render() {
    return (
      <div className="App">

        <Switch>

          <Route exact path="/:id" component={CountryDetail}/>
 
        </Switch>
        <h1>WikiCountries</h1>
        <nav>
          <ul>

            {
              countries.map((elm, idx) => {
                  return (
                  <li key={idx}><Link to={`/${elm.cca3}`}>
                  <Card key={idx} name={elm.name.common} flag={elm.flag} />
                  </Link></li>)
              })
            }

          </ul>
          
        </nav>

        
      </div>
    );
  }
}

export default App;
