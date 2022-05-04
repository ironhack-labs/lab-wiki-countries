import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import countries from './countries.json'
import CountryDetails from './components/CountryDetails/CountryDetails'

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className='col'>
        <CountriesList countries={countries} />
      </div>
      <div className='col'>
        <Routes>
          <Route path="/:id" element={<CountryDetails countries={countries} />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
