import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetails from './components/CountryDetails/CountryDetails'
import countries from "./countries.json";

function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className="container">
        <div className="row">
          <CountriesList />
          <Routes>
            <Route path="/:country_id" element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;