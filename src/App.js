import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import countries from './countries.json';

function App() {
  return (

    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            {countries.map(country => 
              <Route path={`/${country.alpha3Code}`} element={ <CountryDetails country={country} /> } />
            )}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
