import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'



const App = () => {
  return (
    <div className="App">
      <CountryList />
      <Switch>
      <Route exact path="/countries/:cca3" component={CountryDetail} />
      </Switch> 
    </div>
  );
}

export default App;
