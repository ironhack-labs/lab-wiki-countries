import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList'
import Navbar from './components/Navbar';
//import Switch from './components/Switch';


import 'bootstrap/dist/css/bootstrap.css';




function App() {
  return (
    <div><Navbar />
      <CountriesList />

    </div>

  );
}

export default App;
