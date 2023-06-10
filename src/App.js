import './App.css';
import countries from './countries.json';
import { useState } from 'react';

const [currentCountries, setCountries] = useState(countries);

function App() {
  return <div className="App"></div>;
}

export default App;
