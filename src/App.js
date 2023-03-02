import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {
  const [allCountries, setAllContries] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setAllContries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <CountriesList allCountries={allCountries} />
    </div>
  );
}

export default App;
