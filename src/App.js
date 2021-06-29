import React, {Component} from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import Routes from './Routes';
import DataCountries from './countries.json'


class App extends Component{

  state={
    listCountry:DataCountries
  }

  render(){

    const {listCountry} = this.state

   return( 
   <div className="App">
      <Navbar/>
        <div className="row-app">
            <CountriesList countries={listCountry}/>
            <Routes/>
        </div>

    </div>)
  }
}

export default App;
