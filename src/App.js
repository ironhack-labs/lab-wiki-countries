import { useState } from 'react';
import './App.css';
import countriesJson from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesJson);

  return <div className="App"></div>;
}

export default App;
