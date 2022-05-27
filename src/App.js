import './App.css';
import Navbar from './components/Navbar';
import Countries from './countries.json';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<CountriesList countries={Countries} />} />
            <Route
              path="/:countryId"
              element={<CountryDetail countries={Countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
