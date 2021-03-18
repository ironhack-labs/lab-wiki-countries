import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
// import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <CountriesList />
      </div>
    );
  }
}

export default App;
