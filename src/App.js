import './App.css';
import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './data/countries.json'
import axios from 'axios'

function App() {
  
  const [data, setData] = useState([])

  useEffect(() => {
    console.log('i fire on load')
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then(data => {
      
      setData(data.data.sort((a,b) => a.name.official.localeCompare(b.name.official)))
    })
    .catch(err => console.log(err))
  }, [])
  
  

  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <CountriesList countries={data} /> 
        <Routes>
          <Route path="/:id" element={<CountryDetails countries={data} />} />
        </Routes> 
      </div>
    </div>
  );
}

export default App;
