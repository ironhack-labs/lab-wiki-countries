import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json';


function App() {
  const [listofCountries , setListOfCountries] = useState(countries);
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries = {listofCountries}/>
    </div>
  );
}

export default App;
