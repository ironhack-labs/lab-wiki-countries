import React, { Component } from 'react';

import './App.css';
import CountryDetail from './components/CountryDetail';
import Country from './components/Country';
import data from './countries.json';
import { Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  state = {
    countries: data
  }


  render() {
    const {countries} = this.state;
    return (
      <div className="App">
        <div className="row">
          <h2 className="navbar navbar-dark bg-primary mb-3 navbar-brand text-white">WikiCountries</h2>
        </div>
        <div className="row">
          
          <div className="list-group col-5 scroll">
            
            {countries.map((item) => {
              return <Country info={item} key={item.cca3} />
            })}
          </div>
        
          <Route path='/:id' component={CountryDetail}/>
        </div>
      </div>
      
      
    );
  }
}

export default App;
