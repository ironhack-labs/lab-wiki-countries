//Importaciones 
import React from 'react';
// import React, {Component} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { Switch, Route} from 'react-router-dom';




class App extends React.Component {
  
  
  

  render () {
    return (
      <div className="App"> 
      <Navbar/>

        <div class="container">
        <div class="row">
      
      <CountriesList/>
      {/* en la ultima version no se debe usar Router */}
      <Switch> 
         <Route exact path="/:countrycode"
         component={ () => <CountryDetail infoCountry={this.state.singlecountrie} />}/>
       </Switch>
       
       
       
        
          
        </div>
      </div>
      </div>
      
  );
}
}


//Exportaciones
export default App;
