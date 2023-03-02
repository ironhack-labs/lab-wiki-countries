
import './App.css';
import Navbar from './Navbar/Navbar';
import CountriesList from './CountriesList/CountriesList';
import CountryDetails from './CountryDetails/CountryDetails';
import countries from './../../src/countries.json'
import { Routes, Route } from 'react-router-dom';




function App() {


  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className='col-md-6'>
            <CountriesList countries={countries} />
          </div>
          <div className='col-md-6'>
            <Routes>
              <Route path='/:id' element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>
        </div>
      </div >
    </div>


  );
}

export default App;
