import React, { Component } from 'react';

import './App.css';


import Header from './header';

import ListOfCountries from './listOfCountries';


import world from './countries.json'






import AboutCountry from './AboutCountry'

import { Switch, Route } from 'react-router-dom';








class App extends Component {


  state = {


    countries :   world,

    

    
  }




  render() {
    return (
      <div>

      <Header />


      
      
      <Switch>
          <Route  exact path='/' component = {ListOfCountries} />
      </Switch>


      <Switch>

        <Route  path = '/:cca3' component ={AboutCountry} />

      </Switch>



        
      </div>
    );
  }
}

export default App;
