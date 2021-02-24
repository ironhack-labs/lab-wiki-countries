import './App.css';
import Navbar from './Navbar'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <CountriesList />
    </>
  );
}

export default App;
