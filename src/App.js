import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CountryList from './Components/CountriesList'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CountryList />
        <Switch>
          <Route exact path="/"/>
          <Route  path="/:id"/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
