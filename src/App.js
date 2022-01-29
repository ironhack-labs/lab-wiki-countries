import { useState } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';
import countriesJSON from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesJSON);
  return (
    <div className="App">
      <NavBar />
      
      <CountriesList data={countries} />
    </div>
  );
}

export default App;
