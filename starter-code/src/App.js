import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, NavLink, Link } from 'react-router-dom'
import CountryDetail from './components/CountryDetail';
import countryArray from './countries.json'



function countryUrl(oneCountry){
  return `/country/${oneCountry.cca3}`;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/'><h1>Wiki Countries</h1></Link>
        </header>

        <div className="row">
          <div className="col-5">
          
          <div className="list-group">
            <ul>{countryArray.map(oneCountry=>{
              return(
              <li key = {oneCountry.cca3}><Link to ={countryUrl(oneCountry)} className="list-group-item list-group-item-action">{oneCountry.flag} {oneCountry.name.common}</Link></li>
              )
            })}</ul>
            
          </div>

          
          </div>



          <div className="col-7">
            <Switch>
              <Route path = "/country/:countryCCA" component={CountryDetail}/>
            </Switch>
          </div>
        </div>



        


      </div>
    );
  }
}

export default App;
