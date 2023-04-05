import './App.css';
import countriesJSON from './countries.json'
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';


 

function App() {

  const [countries, setCountries] = useState(countriesJSON);
  
  return (
    <div className="App">
      <Navbar />

      <div className='row'>
        <div className='col-4'>
          <CountriesList countries={countries}/>
        </div>

        <div className='col-6'>
          <Routes>
            <Route path='/:alpha3Code' element={<CountryDetail countries={countries}/>} />
          </Routes>
        </div>
      </div>      
    </div>
  );
}

export default App;
