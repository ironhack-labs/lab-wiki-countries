import './App.css';
import { useState } from 'react';
import data from "./countries.json"
import Navbar from './components/Navbar';

function App() {

  const [countries, setCountries] = useState(data)
  
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
