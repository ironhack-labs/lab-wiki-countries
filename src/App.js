
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import {Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';



function App() {
  const [country, setCountry] = useState([]);

  const getCountries = async () => {
    try {
      let response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
      console.log(response.data);
      setCountry(response.data);
     }
    catch (err) {
      console.log(err)  
     }
  };
  
  useEffect(() => {
    getCountries();
    }, []);
    

  return (
    <div className="App">
      
      <Navbar />  

     <Routes>
      <Route path='/countries-list' element={<CountriesList data={country} /> } />
      <Route path='/countries-list/:countryAlpha' element={<CountryDetails data={country} />} />
      
     </Routes>
 

    </div>
  );
 }


export default App; 
