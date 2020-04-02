import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import CountryDetail from './components/CountryDetail'
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <div className="row d-flex justify-content-center">
      <div className="col">
      <CountryDetail/>
      </div>
      <div className="col">
       <Switch>
        <Route exact path='/:id'component= {Details}/>
      </Switch>
      </div>
    </div>
    </div>
  );
}
export default App;
