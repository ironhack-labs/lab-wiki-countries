import './App.css';
import jsonData from './countries.json'
import { useState } from 'react';



function App() {
  const [countries, setCountries] = useState(jsonData)
   
  return (
    <div className="App">

    </div>
  );
}

export default App;
