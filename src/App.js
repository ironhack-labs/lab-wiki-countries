import './App.css';
import axios from 'axios';
// import countriesListJson from './countries.json'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [countriesList, setCountriesList] = useState([])

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response)=>{
        setCountriesList(response.data)
      })
      .catch(error => console.log('Error retriving data from axios', error))
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <Routes>
            <Route className="route" path ="/" element ={<CountriesList countriesList={countriesList}/>} />
            <Route path ="/countries/:alpha3Code" element ={<CountryDetails/>} />

            <Route path="*" element={ <h2>404: sorry, this route does not exist</h2>} />
          </Routes>
        </div>
      </div>
    

    </div>
  );
}

export default App;