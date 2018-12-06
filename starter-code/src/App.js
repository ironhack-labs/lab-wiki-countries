import React, { Component } from 'react';

import './App.css';


import Header from './header';

import ListOfCountries from './listOfCountries';

import AboutCountry from './AboutCountry'

import { Switch, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>

      <Header />
     
      
      <Switch>
          <Route  exact path='/' component = {ListOfCountries} />
      </Switch>


      <Switch>

        <Route exact path = '/:cca3' component ={AboutCountry} />

      </Switch>



        
      </div>
    );
  }
}

export default App;
