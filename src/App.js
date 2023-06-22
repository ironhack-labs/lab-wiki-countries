import { useState } from 'react';
import './App.css';
import allCountries from './countries.json'

function App() {

  const [countries, setCountries] = useState(allCountries);

  return (
    <div className="App">
    </div>
  );
}

export default App;
