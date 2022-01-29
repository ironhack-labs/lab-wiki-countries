import { useState } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';
import countriesJSON from './countries.json';
import axios from 'axios';
import React from 'react';

const api = axios.create({
  baseURL: 'https://ih-countries-api.herokuapp.com/countries',
});

function App() {
  async function getCountries() {
    try {
      const { data } = await api.get('/');
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  }
  const [countries, setCountries] = useState(countriesJSON);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    getCountries();
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <NavBar />
      {loading && <h1>Loading...</h1>}
      <CountriesList data={countries} />
    </div>
  );
}

export default App;
