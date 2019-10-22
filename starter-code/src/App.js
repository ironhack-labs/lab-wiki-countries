import React, { Fragment } from 'react';
import './App.css';
import Navbar from './Navbar';
import CountryList from './CountryList';


const App = () => {
  return (
    <Fragment>
      <Navbar />
      <CountryList />
    </Fragment>
    
  );
}

export default App;
