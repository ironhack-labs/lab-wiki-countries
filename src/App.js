import './App.css';
import countriesFromJSON from './countries.json';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState(countriesFromJSON);

  console.log(countries);

  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
