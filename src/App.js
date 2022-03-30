import React from 'react';
import CountriesList from './Components/CountriesList';
import NavBar from './Components/Navbar';
import countryJSON from './countries.json';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CountriesList countryJSON={countryJSON} />
    </div>
  );
}

export default App;
