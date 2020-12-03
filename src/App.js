import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails';
import Error from './pages/Error';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={CountriesList} />
        <Route exact path="/country/:cca3" component={CountryDetails} />
        <Route component={Error} />
      </Switch>
      
    </div>
  );
}

export default App;
