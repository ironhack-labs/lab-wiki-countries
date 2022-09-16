import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState(true)

  const getCountries = async () => {
    try {
      const { data } = await axios.get('https://ih-countries-api.herokuapp.com/countries')
      setCountries(data)
      setLoading(false)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <div className="App">
      <NavBar />
      {!loading?
      <div style={{display:'flex'}} >
        <CountriesList countries ={countries}/>
        <Routes>
          <Route path="/:id" element={<CountryDetails countries ={countries} />} />
        </Routes>
      </div> : <div>Loading...</div>}
      
    </div>
  );
}

export default App;