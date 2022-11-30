import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountriesDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
      <main className="App">
      <Navbar />
      <Routes>
          <Route path='/countries' element={<CountriesList />} />
          <Route path='/countries/:alpha3Code' element={<CountriesDetails />} />
      </Routes>

    </main>
  );
}

export default App;
