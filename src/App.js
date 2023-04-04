import './App.css';
import data from './countries.json'
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

 

function App() {

  const [countries, setCountries] = useState(data);
  
  return (
    <div className="App">
      <Navbar />
      <CountriesList data= {countries}/>
    </div>
  );
}

export default App;
