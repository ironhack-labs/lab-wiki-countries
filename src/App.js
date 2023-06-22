import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countries from'./countries.json';
import { Routes, Route } from 'react-router-dom';

function App() {

  const getCountry = (countryAlpha3Code) => {
    return countries.filter((countryObj) => countryObj.alpha3Code === countryAlpha3Code )[0]
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countriesArr={countries}></CountriesList>

          <Routes>
            <Route path="/:alpha3Code" element={ <CountryDetails callbackToGetCountry={getCountry}></CountryDetails> } />
          </Routes>

        </div>
      </div>   
    </div>
  );
}

export default App;
