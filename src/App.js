import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { useEffect, useState } from 'react';
import countriesService from './services/countries.service';

function App() {
  const [countriesList, setCountriesList] = useState([]);
  
  useEffect(() => {
    countriesService.list()
      .then((countries) => setCountriesList(countries))
      .catch(error => console.error(error));
  }, [])

  if (countriesList.length === 0) {
    return (
      <>
        <Navbar />
        <div className='d-flex align-content-center justify-content-center mt-5'>
          <h2><i className="fa-solid fa-spinner fa-spin-pulse" style={{marginRight: '15px'}}></i>Loading countries...</h2>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll', overflowX: ' hidden' }} >
            <div className="list-group">
              <CountriesList countries={countriesList} />
            </div>
          </div>
            <div className="col-7 p-5">
              <Routes>
                <Route path="/:code" element={<CountryDetail countries={countriesList} />} />
              </Routes>
            </div>
        </div>
      </div>
    </>
  );
}


export default App;
