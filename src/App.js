import './App.css';
import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import HomePage from './pages/HomePage';
import countries from './data/countries.json'

function App() {
  
  const [data, setData] = useState([])
  useEffect(() => {
    setData(countries)
  }, [])
  
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage countries={data} />} />
        <Route path=":id" element={<CountryDetails countries={data} />} />
      </Routes> 
    </div>
  );
}

export default App;
