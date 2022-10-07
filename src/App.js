import './App.css';
import Navbar from './components/Navbar';
// import countries from './countries.json';
import CountriesList from './components/CountriesList';
// import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        console.log('List Of Countries:', response);
        setData(response.data);
      })
      .catch((er) => {
        console.log('errr: ', er);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<CountriesList countriesData={data} />} />
        <Route path="/:id" element={<CountryDetails countriesData={data} />} />
      </Routes>
    </div>
  );
}
export default App;
