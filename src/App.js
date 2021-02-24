import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList'
import Countrie from './components/Countrie'
import { Link } from 'react-router-dom'

function App() {
  return (
  <>
  <NavBar />
  <CountriesList />
  {/* <Countrie /> */}
  </>
  );
}

export default App;
