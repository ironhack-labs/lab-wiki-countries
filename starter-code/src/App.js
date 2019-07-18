import React, { Component } from 'react';
import './App.css';
import countries from './countries.json'
import { Switch, Route, Redirect } from 'react-router-dom';
import ListCountries from './ListCountries';
import CountrieDetail from './CountrieDetail'

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
                <ListCountries  cca3={country.cca3 } flag={country.flag} name={country.name.common}idx ={idx}></ListCountries>
              )}
              </div>
            </div>
            <Switch>
            <Route exact path='/:idx' render={(props) => {
              var chosenCountry = props.match.params.idx
              console.log(chosenCountry)
              return <CountrieDetail country={this.state.countries[chosenCountry]}></CountrieDetail>
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
