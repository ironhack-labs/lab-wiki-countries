
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from "./components/CountriesList"
// import countries from "./countries.json"
import CountryDetails from "./components/CountryDetails"
import {Routes, Route} from "react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios"
import Welcome from "./components/Welcome"

function App() {
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries").then(results => {
    setCountries(results.data)
    })
  }, [])

  return (
    <div className="App">
     <Navbar />


     <div className="container">
    <div className="row">
      {countries ? <CountriesList countries={countries} /> : <div className='col-5' style={{height: "90vh", overflow: "scroll"}}><p>Loading Countries...</p></div>}
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/:alpha3Code" element={<CountryDetails />}/>

      </Routes>
    </div>
  </div>
</div>
  );
}

export default App;
