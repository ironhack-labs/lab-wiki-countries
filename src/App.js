import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Route} from 'react-router-dom'
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'

function App() {
  return (
    <div className="App">
      <div>
      <h1> Wiki Countries</h1>
      </div>
      {/*showing the list of countries*/}
      <CountriesList />
      {/*what i want the browser to show*/}
      <Route path="/:cca3" component={CountryDetail}/>
      </div>
  );
}

export default App;
