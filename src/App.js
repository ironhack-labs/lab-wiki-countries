import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import countries from './countries.json'
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {
  return (
    <div className="App d-flex flex-row">
      <div>
        <div className='fixed-top mb-5'>
          <Navbar />
        </div>
        <div className='pt-5'>
          <CountriesList countries={countries} />
        </div>
      </div>
      <div className="mt-5 sticky-top">
        <Routes >
          <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
