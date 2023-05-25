import './App.css';
import { Route, Routes } from 'react-router-dom';
import Countries from './countries.json'
import Navbar from './Navbar/Navbar'
import CountriesList from './CountriesList/CountriesList';
import CountryDetails from './CountryDetails/CountryDetails';
function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-4">
            <CountriesList />
          </div>
          <div className="col-6">
            <Routes>
              <Route path="/:country_id" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>

  )

}

// ...


// ...

export default App;
