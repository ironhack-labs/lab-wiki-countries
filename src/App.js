import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import countries from './countries.json'
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetails from './components/CountryDetails/CountryDetails'





function App() {
  return (
      <div className="App-link">
      <Navbar />
      <CountriesList countriesJSON={countries} />

      <Routes>
      <Route path="/:id" element={
          <CountryDetails countriesJSON={countries}/>
      } />
      </Routes>


      </div>
    )
}

export default App;
