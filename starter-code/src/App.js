import React, { Component } from 'react'
import countries from './countries.json'
import './App.css'
import { Route, Link } from 'react-router-dom'
import CountryDetail from './components/CountryDetail.js'

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#2b292f", padding: "2%"}}>
        <div className="navbar-header row">
          <div className="col-5"><h1 style={{color: "white", marginBottom: "1%"}}>WIKI COUNTRIES</h1></div>
        </div>
        <div className="row">
            <div className="col-md-5">
            {countries.map((country, index) => 
              <div key={index} className="list-group card" style={{width: '50%',backgroundColor: "#d5d2df"}}>
                <Link style={{textDecoration: "none"}} to={`/${country.cca3}`}>{country.name.common}</Link>
                <p>{country.flag}</p>
              </div>
            )}
        </div>
            <div className="col-md-4 card text-center" style={{marginRight: "10%", height: "100%",backgroundColor: "#BDD1E5"}}>
            <Route exact path="/:id" component={CountryDetail} />
            </div>  
          </div>
          
        </div>
            

      
    );
  }
}

export default App;
