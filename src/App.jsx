import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CountriesList from "./components/CountriesList/CountriesList";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import countries from "./countries.json"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <div className="App">
        <Navbar />

        <div className="container margin-top">

          <div className='row'>

            <div className='col-md-3'>
              <CountriesList className="countryList" countries={countries} />
            </div>

            <div className='col-md-9'>
              <Routes>
                <Route path="/country/:id" element={
                  <CountryDetails countries={countries} />
                } />
              </Routes>
            </div>

          </div>
        </div>

      </div>


    </>
  )
}
export default App;

// 