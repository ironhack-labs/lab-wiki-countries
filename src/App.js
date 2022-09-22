
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countries from  './countries.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>        
            <Route path='/:countryCode' element={<CountryDetails  />} />
          </Routes>
        </div>
      </div>      
    </div>
  );
}

export default App;
