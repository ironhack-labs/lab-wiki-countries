import React from 'react';
import './App.css';
import Navbar from './misc/Navbar';
import CountryDetail from './components/CountryDetail';
import { Switch, Route } from 'react-router-dom';

const App = () => {

    return (
      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path="/" component={CountryDetail} />
        </Switch>
      </div>
    )
}

export default App;
