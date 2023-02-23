import { useState } from 'react';
import './App.css';
import countriesData from "./countries.json"

function App() {
  const [countries, setCountries] = useState(countriesData)
  
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
