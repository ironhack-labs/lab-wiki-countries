import React, { Component } from 'react';
//import Navbar from './components/Navbar';
import './App.css';
// import Home from './components/Home';
// import About from './components/About';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
//import ProjectDetails from './components/ProjectDetails';
import countries from './countries.json'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      allCountries: countries,
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">  
          <div className="row bg-primary text-white">
            <h2>Wiki Countries</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
          <CountryList />
          </div>
          <div className="col-md-8">
            <Switch>
              {/* <Route exact path='/' component={CountryList} data={countries}/> */}
              <Route exact path="/country/:common" component={CountryDetails} data={countries} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
