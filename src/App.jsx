import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import CountriesList from './CountriesList/CountriesList';
import CountryDetails from './CountrieDetails/CountryDetails';
// import axios from 'axios'


function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/CountriesList' element={<CountriesList />} />
        <Route exact path="/countries/:alpha3Code" element={<CountryDetails />} />
      </Routes>


    </div>
  );
}

export default App;



