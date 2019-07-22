import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link to='/'>
          <span className="navbar-brand">WikiCountries</span>
        </Link>
      </div>
    </nav>
  )
}

class App extends Component {
  render() {
    return (
      <>
        <Navbar/>

        <div className="container">
          <div className="row">

            <div className="col-5">
              <CountryList/>
            </div>  

            <div className="col-7">   
              <Switch>
                <Route path="/details/:id" component={CountryDetail} />
              </Switch>
            </div>

          </div>  
        </div>
     </>  
    );
  }
}

export default App;
