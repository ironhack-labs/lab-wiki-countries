import './App.css';
import { useState } from 'react';
import countriesData from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesData);

  console.log(countries);
  return <div className="App"></div>;
}

export default App;
