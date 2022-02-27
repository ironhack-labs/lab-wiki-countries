import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:code" element={<CountryDetails />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
