import logo from './logo.svg';
import './App.css';
import { Navbar } from './compoments/Navbar';
import { CountriesList } from './compoments/CountriesList';
import { Route, Routes } from 'react-router';
import { CountryDetail } from './compoments/CountryDetail';
import countriesData from './countries.json';


function App() {
  console.log(countriesData)
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
          <CountriesList countries={countriesData} />
          <Routes>
          <Route path='/countries/:id' element={<CountryDetail countries={countriesData} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
