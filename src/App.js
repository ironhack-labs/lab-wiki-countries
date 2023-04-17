import './App.css';
import { useState } from 'react';
import countriesData from "./countries.json"
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {

  const [countries, setCountries] = useState(countriesData)

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList data={countries}/>
        </div>
      </div>
    </div>
  );
}

export default App;
