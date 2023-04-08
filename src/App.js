import { useState } from 'react';
import './App.css';
import countriesDB from 'src/countries.json';

function App() {
  const [countries, setCountries] = useState(countriesDB);

  return <div className="App"></div>;
}

export default App;
