import React, { Component } from 'react';
import logo from './logo.svg';
import countries from './countries.json'
import './App.css';
import WikiCountries from './WikiCountries';
import CountryDetail from './CountryDetail';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state = {
      countries : countries 
    }
  }

  render() {
    return (
      <div id="root">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
          <div className="container">
          <div className="row">
            <div className="col-5" style={{height: "90vh", overflow: "scroll"}}>
              <div className="list-group">
              {this.state.countries.map((country,idx)=>
         <WikiCountries cca3={country.cca3} flag={country.flag} name={country.name.common} idx={idx}></WikiCountries>
              )}
                
              </div>
            </div>
            <Switch>
              <Route exact path='/:idx' render={(props) => {
              var chosenCountry = props.match.params.idx
              console.log(this.state.countries[chosenCountry])
              return <CountryDetail country={this.state.countries[chosenCountry]}></CountryDetail>
              
            }} />
              </Switch>

            </div>
          </div>
        </div>
      </div>
    )
   
    
  }
}

export default App;
