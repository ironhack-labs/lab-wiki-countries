import { useState } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import countriesJson from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesJson);

  return (
    <div className="App">
      <CountriesList countries={countries} />
    </div>
  );
}

export default App;
