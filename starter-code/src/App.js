import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import { render } from 'react-dom';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      countriesArray: countries,
    }
  }


  render(){
    return (
      <div className="App">
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className='mainDiv'>
          <div className="list-group listGroup">
            { 
              this.state.countriesArray.map((eachCountry, idx) => {
                return <Link key={idx} to={`/${eachCountry.cca3}`} className="list-group-item list-group-item-action">{eachCountry.flag}{eachCountry.name.official}</Link>
              })
            }
          </div>
        <Switch>
          <Route exact path='/:id' component={CountryDetails}></Route>
        </Switch>
        </div>
      </div>
    )
  }
}





export default App;
