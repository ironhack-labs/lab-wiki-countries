import countriesData from './countries.json';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import './App.css';

function App() {
  const [countries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />
      <div className="grid">
        <CountriesList props={countries} />
      </div>
      <div>somethin here</div>
    </div>
  );
}

export default App;
