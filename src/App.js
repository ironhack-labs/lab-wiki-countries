import './App.css';
import { useState, useEffect } from 'react';
import CountrieDetails from './countries.json';
import countries from './countries.json'; // Renamed CountrieDetails to countries
import Navbar from './components/Navbar';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countries);
  }, []);

  return (
    <div className="App">
    
           
    <Navbar />

    



    </div>
  );
}

export default App;
