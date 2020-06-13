import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={CountriesList} />
        <Route path="/countries/:cca3" component={CountryDetail} />
      </Switch>
    </div>
  );
}

export default App;
