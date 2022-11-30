import './App.css';
import Navbar from './components/Navbarr/Navbar'
import CountriesList from './components/CountriesList/CountriesList';
import { Route, Routes } from 'react-router-dom'
import CountryDetails from './components/CountryDetails/CountryDetails'
import countriesInfo from "./countries.json"


function App() {
  return (
    <main className="App">
        <Navbar/>
        <div className='container d-flex flex-row'>
        <CountriesList countries={countriesInfo} />
    <Routes>
   <Route path='/:country_id' element={<CountryDetails country={countriesInfo} />} />
   

    </Routes>
    </div>
    </main>
  
  );
}

export default App;
