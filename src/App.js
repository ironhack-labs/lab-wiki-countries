import { useEffect, useState } from 'react';
import './App.css';
import countriesData from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(null);

   useEffect ( () =>{
    async function fetchApi(){
      const response = await fetch("https://ih-countries-api.herokuapp.com/countries");
      const countriesApi = await response.json();
      setCountries(countriesApi)
    }
    fetchApi();
  },[])

  return (
    <>

   
    {!countries && <h3>Countries not found!</h3>}
    {countries && (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countriesData={countries} />
          <Routes>
          <Route
              path="/:countryId"
              element={<CountryDetails countriesData={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
    )
    
    }
    </>
  );
}

export default App;
