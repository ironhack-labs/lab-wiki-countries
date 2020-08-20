import React, { Component } from 'react';
import NavBar from './components/Navbar'
import CountriesList from './components/CountriesList'
import 'bootstrap/dist/css/bootstrap.css'
import countries from './countries.json'
import './App.css';

class App extends Component {
  state={
    countries: countries
  }



  render(){
    return (
      <div className="App" style={{width:'98vw'}}>
        <NavBar/>
        <CountriesList list= {this.state.countries}/>
      </div>
    );
  }
}

export default App;
