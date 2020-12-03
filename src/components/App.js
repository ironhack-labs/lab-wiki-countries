import React, { Component } from 'react'
 
import NavBar from './navbar/Navbar';
import CountriesList from './countriesList/CountriesList';
import CountriesDetails from './countriesDetails/CountriesDetails';

import Countries from '../countries.json'



import { Switch, Route } from 'react-router-dom'


class App extends Component {

  constructor() {
    super()
    this.state = {
      countries: Countries
    }
  }

  render() {

    return (
      <>
        <NavBar />
      
        <main>
          <div className='container'>
            <div className='row'>
              
          <CountriesList />
          <Switch><Route from="/countries/:cca3" render={props => <CountriesDetails {...props}/>} /> </Switch>
  
            </div>
          </div>

        </main>
      </>
    );
  }
}

export default App;
