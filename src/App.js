import countriesFromDb from './countries.json';
import { useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState(countriesFromDb);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
