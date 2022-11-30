import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './App.css';
// import countriesArray from './countries.json'
import CountriesDetails from './components/CountriesDetails/CountriesDetails';
import CountriesList from './components/CountriesList/CountriesList';
import NavBar from './components/Navbar/Navbar';

function App() {

     
    const [countries, setCountries] = useState([])
    
  useEffect(() => {
      fetch('https://ih-countries-api.herokuapp.com/countries')
        .then(res => res.json())        
        .then(countriesArray => {      
          const countriesCopy = [...countriesArray]
          const sorted = countriesCopy.sort((a, b) => {
            return a.name.official.localeCompare(b.name.official)
          })
          setCountries(sorted)          
        })
      .catch(err => console.log(err))   
      
    }, [])
    

  return (
    <div className="App">
      
      <NavBar />
      
      <div className='container mt-5'>

        
        <div className='row'>
          <div className='col-4'>
            <h2>Listado de Países</h2>
            <hr />

          </div>

          <div className='col-8'>
            <h2>Detalles</h2>
            <hr />

          </div>

        </div>
        <div className='row'>

          <div className='col-4'>
            
            <CountriesList countries={countries} />

          </div>

          <div className='col-8'>
          
            <Routes>

              <Route path="/:alpha3Code" element={<CountriesDetails countries={countries} />} />
              
            </Routes>

          </div>
        </div>
      </div>      
    </div>
  );
}

export default App;
