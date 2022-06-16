import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar';
import countries from './countries.json'
import {useState, useEffect} from 'react'
import axios from "axios";
import {Routes, Route} from 'react-router-dom'

const apiURL = 'https://ih-countries-api.herokuapp.com/countries'

function App() {
  const [country, setCountry] = useState(countries)
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    axios.get(apiURL).then((response) => {
    setCountry(response.data);
    setFetching(false);
    console.log('Fetching!')
    })
  }, []);
  

  return (
   
    <div className="App">
    <Navbar />
    <div className="container">
    {fetching && <p>Loading...</p>}
    <div className="row">
    <div className="col-3">
    <CountriesList list={country} /> 
    </div>
    <div className="col-9">
    <Routes>
    <Route path="/:alpha3Code" element={<CountryDetails list={country}/>} ></Route>
    </Routes>
    </div>
    
    </div>
    
    </div>
   
    </div>
   
   

  );
}

export default App;
