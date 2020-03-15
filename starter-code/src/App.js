import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail'
import { Switch, Route } from 'react-router-dom';
import Countries from './components/Countries'

function App() {
  return (
<>
<Switch>
  <div className="row">
  <div className="col-4">
    <Route path="/" component={Countries} />
  </div>
  <div className="col-8">
  <Route path="/:id" component={CountryDetail} />
  </div>
   
  </div>
</Switch>
</>
  );
}

export default App;
