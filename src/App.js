import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { CountriesList } from './Components/CountriesList';
import { CountriesDetails } from './Components/CountriesDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [countries, setCountries] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get('https://ih-countries-api.herokuapp.com/countries')
      setCountries(response.data)
    } catch (error) {
      window.alert('Houve um erro!')
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="App">

      < Navbar />
      <div className='container'>
        {/* <div className='row'> */}

        < CountriesList countries={countries} />
        <Routes>
          <Route path='/Country/:id' element={< CountriesDetails />} />
        </Routes>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
