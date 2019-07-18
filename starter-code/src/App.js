import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'
// import {Link,Switch, Route } from 'react-router-dom'

class App extends Component {


  render() {
    return (
    <div>
     <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
            <CountryList/>
            <Route path="/e/:cca3" component={CountryDetail} />
     </div>
      )
  }
}

export default App; 
