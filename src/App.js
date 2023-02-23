import './App.css';
import countriesData from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { StrictMode, useState } from 'react';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <StrictMode>
        <Navbar />
        <CountriesList countries={countries} />
      </StrictMode>
    </div>
  );
}
export default App;
