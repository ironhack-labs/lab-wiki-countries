import './App.css';
import countries from './countries.json'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryList from './components/CountriesList';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState(countries)
  
  return (
    <div className="App">
       <Navbar/>
       <div className="container">
          <div className="row">
         
            <CountryList items = {countries}/>
            <Routes>
                 <Route path='/:idCountry' element={ <CountryDetails countries={countries}/>}/>

            </Routes>

          </div>
        </div>
    </div>
  );
}

export default App;
