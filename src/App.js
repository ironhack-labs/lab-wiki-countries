import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetails from './components/CountryDetails/CountryDetails'

import countries from './countries.json'


function App() {
  return (
    <div className="App">
      <Navbar />

      <CountriesList countries={countries} />

      <Routes>
        <Route path="/:id" element={<CountryDetails countries={countries} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </div>
  );
}

export default App;