
import "./App.css";
import countries from "../countries.json"
import { Route, Routes } from 'react-router-dom';
import CountriesList from "./CountriesList/CountriesList";
import CountryDetails from "./CountryDetails/CountryDetails";
import Navbar from "./Navbar/Navbar";


function App() {
  return (



    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-6">
            < CountriesList />
          </div>
          <div className="col-6">
            <Routes>

              <Route path='/CountryDetail/:idCountry' element={<CountryDetails />} />
            </Routes>
          </div>

        </div>
      </div>
    </div>

    // ...


  )
}

export default App;