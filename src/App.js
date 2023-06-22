// src/App.js
import { useState } from 'react';
import './App.css';
import countriesFromJson from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesFromJson);
  return <div className="App"></div>;
}
export default App;
