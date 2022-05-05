import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Navbar from './components/Navbar/navbar';
import CountryDetails from './components/CountryDetails/countryDetails';
import CountriesList from './components/CountriesList/countriesList';
import countries from "./countries.json";


function App() {
  return <div className="App">

    <Navbar />
    
    <div className="body" >
      <CountriesList countries={countries} />

      <Routes>
        <Route path=':countryId' element={<CountryDetails countries={countries} />} />
      </Routes>
      
    </div>
   


  </div>
}
export default App;

{/* <Route path='/:countryId' element={<CountryDetails countries={countries} />} /> */}

