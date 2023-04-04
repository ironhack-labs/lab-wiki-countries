import './App.css';
import data from './countries.json'
import { useState } from 'react';

 

function App() {

  const [countries, setCountries] = useState(data);
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
