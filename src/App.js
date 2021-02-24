import React from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import countries from './components/countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';



function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
        {/* <Route path="/:country">
          <CountryDetails countries={countries} />
        </Route> */}
          </div>
        </div>
      </div>
      {/* CountriesList */}
      {/* switch de rutas con match*/}

    </>
  );
}

export default App;
