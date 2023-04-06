import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import countries from "./countries.json";



function App() {

  const[countriesArr, setCountriesArr] = useState(null)

  return (
    <div className="App">
    <Navbar/> 

    </div>
    
  );
}

export default App;
