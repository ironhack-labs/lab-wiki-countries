import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar'
import CountriesList from './components/countries/CountriesList'
import CountrieDetails from './components/countries/CountrieDetails'





// import Countries from '../../countries.json'


import { Route, Switch} from 'react-router-dom'


function App() {

  
  return (
    <>
    <Navbar />


               
    <div className="container">
      <div className="row" >
    <CountriesList />
      <Switch>
        <Route path="/:cca3" render={props => <CountrieDetails {...props} />}/> 
      </Switch>
            
      </div>

    </div>

    </>
  );
}

export default App;
