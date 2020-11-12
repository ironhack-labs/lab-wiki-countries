import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Navbar'
import CountriesList from './components/CountriesList'
import { Route, Switch } from 'react-router-dom';
import CountryDetails from './components/CountryDetails'
import countries from './countries.json'

const App = () => {


    return (
    <div>
      <NavBar/>
       <CountriesList/>
       <Switch>
        <Route exact path='/:cca3' render={(props)=><CountryDetails {...props} countries={countries} />}/>
      </Switch>
    </div>
    )
  
    
}

export default App;
