import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import Countries from './countries.json';


function App(props) {
  
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = () => {
    const allCountries = Countries;
    setCountries(allCountries)
  };

  return (
    <div className="App">
      <div>

      <Navbar />

      <div className="container">
        <div className="row">
          <Routes>
            <Route path='/' element={<CountriesList countries={countries} />} />
            <Route path='/:countryId' element={[<CountriesList countries={countries} />, <CountryDetails countries={countries}/>]} />
          </Routes>
        </div>
      </div>
    </div>
      </div>
  );
}

export default App;
