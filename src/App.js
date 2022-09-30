import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import countriesArray from './countries.json'
import {useState} from 'react'

function App() {
  const [countries,setCountries] = useState(countriesArray)
  return (
    <div className="App">
      <NavBar countries={countries} setCountries={setCountries}/>
    </div>
  );
}

export default App;
