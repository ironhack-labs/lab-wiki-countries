import { useState } from 'react';
import './App.css';
import countriesDB from './countries.json';
import Navbar from './components/Navbar';

function App() {
  const [countries, setCountries] = useState(countriesDB);

  return <div className="App">
    <Navbar />
  </div>;
}

export default App;
