import { Route, Routes } from 'react-router';
import './App.css';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container d-flex p-3">
        <CountriesList countries={countries} />
        <Routes>
          <Route path=":alpha3Code" element={<CountryDetails countries={countries}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
