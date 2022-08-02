import './App.css';
import countriesJson from './countries.json';
import { Navbar, CountriesList, CountryDetails } from './components';
import {useState} from 'react'
import RootRouter from './RootRoutes';


function App() {


  return (
    <div>

   
      <Navbar />

      <div className="container">
        <div className='row'>
          <CountriesList countries={countriesJson}/>
          <RootRouter/>

        </div>
      </div>
    </div>
  );
}

export default App;
