import './App.css';
import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import { Switch, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import countries from './countries.json';

function App() {
  const [countryDb, setCountryDb] = useState([]);
  useEffect(() => {
    setCountryDb(countries);
    console.log('State is is, compoenent did mount!');
  }, []);
  return (
    <div>
      <Navbar />
      <CountryList countries={countryDb} />
      <Switch>
        <Route path="/country/:id" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
