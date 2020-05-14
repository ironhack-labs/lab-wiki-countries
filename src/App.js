import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="container">
        <div className="row">
    <Router>
        <CountriesList />
        <Route path='/country/:cca3' component={CountryDetail}/>
   </Router>
   </div>
   </div>
    </div>
  );
}

export default App;
