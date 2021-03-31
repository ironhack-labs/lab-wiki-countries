import React, {Component} from 'react'

import data from '../src/data/countries.json'

import './App.css';

//components
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetails from './components/CountryDetails/CountryDetails'
import Router from './components/Router/Router'



class App extends Component {

  state ={
    countries: [...data]
}


  render(){
    return (
      <div className="App">
        <header>
          <Navbar/>
        </header>

        <main className="container">
          <div className="row justify-content-between">
            <div className="col">
              <CountriesList data={this.state.countries}/>  
            </div>
            <div className="col">
              <CountryDetails data={this.state.countries}/> 
            </div>
              <Router />
          </div>
        </main>
        
        <footer>
        </footer>
      </div>
    )
  }
}

export default App;
