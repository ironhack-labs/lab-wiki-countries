import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import countriesData from './countries.json'



function App() {
  return (

    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">

          <div className="col-md-3">
            <CountriesList countriesData={countriesData} />
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="/:id" element={<CountryDetails countries={countriesData} />} />
            </Routes>
            {/* <CountryDetails countriesData={countriesData} /> */}
          </div>

        </div>
      </div>
    </div>


  )
}

export default App
