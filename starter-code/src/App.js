import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Details from './components/Detail'
import { BrowserRouter } from "react-router-dom";
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">
   <CountryDetail />
   <Switch>
        <Route exact path='/:id' component={Details}/>
    </Switch>
    </div>
  );
}

export default App;
