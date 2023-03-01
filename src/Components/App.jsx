import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import CountriesList from './CountriesList/CountriesList'
import CountryDetails from './CountryDetails/CountryDetails'
import countries from './../../src/countries.json'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">

          <CountriesList />

          <Routes>
            <Route path='/:id' element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
