
import React from 'react'
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail'
import { Route } from 'react-router-dom';

function App() {
  return (
  <>
<nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
      <a className="navbar-brand" href="#">WIKICOUNTRIES</a>
        </div>
</nav>  

<CountriesList/>
<Route path="/countries/:id" component={CountryDetail}/>

    </>
  );
}

export default App;
