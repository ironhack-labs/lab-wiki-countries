import Router from './Router';
import { CountryList, Navbar } from './components';
import './App.css';
import data from './countries.json'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App( useState ) {


  useEffect(() => {},[]);
  return (
    <>
      <Navbar />
      <div className="container">
      <div>
        <CountryList countries={data}/>
      </div>
          <div className="row">
        <Router/>
      </div> 
      </div>
    </>
  );
}

export default App;
