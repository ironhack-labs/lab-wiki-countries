import './App.css';
import countriesData from './countries.json';
import Navbar from './components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import CountriesList from './components/CountriesList/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {

  return (
    <div className="App d-flex flex-row">
      <div>
        <Navbar />
        <div>
          <CountriesList countries={countriesData} />
        </div>
      </div>

      <Routes>
        <Route path="/:alpha3Code" element={<CountryDetails countries={countriesData} />} />
      </Routes>

    </div>
  );
}

export default App;
