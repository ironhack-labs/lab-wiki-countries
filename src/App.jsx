import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar/navbar';
import CountriesList from './components/CountriesList/CountriesList';
import countries from './countries.json'
import CountryDetail from './components/CountryDetails/CountryDetails';

function App() {
  // className = "App"
  return (
    <>
      <Navbar />
      <div className='container'>

        <div className='row'>
          <div className="col-md-6">
            <CountriesList countries={countries} />
          </div>

          <div className="col-md-6">
            <Routes>

              <Route path="/countries/:country_Id" element={
                <CountryDetail countries={countries} />
              } />

            </Routes>
          </div>



        </div>
      </div>
    </>

  );
}

export default App;
