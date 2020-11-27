import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CountriesList from './components/CountriesList';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/countries" component={CountriesList} />
      </Switch>
    </div>
  );
}

export default App;
