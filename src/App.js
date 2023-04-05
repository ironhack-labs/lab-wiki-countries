import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import countriesDB from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll', overflowX: ' hidden' }} >
            <div className="list-group">
              <CountriesList countries={countriesDB} />
            </div>
          </div>
            <div className="col-7 p-5">
              <Routes>
                <Route path="/:code" element={<CountryDetail countriesDB={countriesDB} />} />
              </Routes>
            </div>
        </div>
      </div>

    </div>
  );
}


export default App;
