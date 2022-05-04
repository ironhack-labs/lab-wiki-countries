import './App.css';

import Navbar from './Navbar/Navbar'
import CountriesList from './CountriesList/CountriesList'
import CountryDetails from './CountryDetails/CountryDetails'
import { Route, Routes } from 'react-router-dom'

import countries from './countries.json'

function App() {

  return (
    <div className="App">

      <Navbar />

      <div className="container">
        <div className="row">
          <div className='col-md-6 '>
            <CountriesList countries={countries} />
          </div>
          <div className='col-md-6'>
            <Routes>
              <Route path='/:alpha3Code' element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>
        </div>
      </div>







    </div>
  );
}

export default App;
