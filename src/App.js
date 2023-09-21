
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import DataCountries from './countries.json'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useRoutes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

function App() {

  const [countries, setCountries] = useState([])
  
  useEffect(()=>{
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then((response)=>{
      setCountries(response.data)
    })
    .catch((err)=>console.log(err))
  },[])

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='container'>
        <div className='row'>
          <div className='col-5' style={{maxHeight:'90vh', overflow: 'scroll'}}>
            <div className='list-group'>
              <CountriesList countries={countries}/>
            </div>

          </div>
          <Routes>
            <Route path='/:alpha3Code'  element={<CountryDetails countries={countries}></CountryDetails>}> </Route>
          </Routes>
          

        </div>

      </div>
     
    </div>
  );
}

export default App;
