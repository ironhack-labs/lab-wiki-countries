import countriesJson from './countries.json';
import { useState } from 'react'
import Navbar from './components/Navbar';

function App() {

  const [countries, setCountries] = useState(countriesJson);

  return (
    <div className="App h-screen">
      <Navbar />
    </div>
  );
}

export default App;
