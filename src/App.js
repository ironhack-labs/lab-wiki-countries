import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom/dist';
import { useCallback, useEffect, useState } from 'react';
import { fetchCountries } from './services/countries-service';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  const [ countries, setCountries] = useState(null)

  const getCountries = useCallback( () => {
    fetchCountries().then((countries) => setCountries(countries.data))
  },[])
  
  useEffect(()=>{
    getCountries()
  },[getCountries])

  return (
    <div>
      <Navbar/>
      <div className="row">
        <CountriesList />
        <Routes>
          <Route path="/:alpha3Code" element={<CountryDetails countries={countries}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
