import React from 'react';
import {Route} from 'react-router-dom'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
;


function App() {
  



  return (
    <div>
    <Navbar />
    <div style={{display: 'flex'}}> 
      <CountriesList />
      <Route path={'/country/:cca3'} component={CountryDetails} />
    </div>
  </div>
);
}



export default App;