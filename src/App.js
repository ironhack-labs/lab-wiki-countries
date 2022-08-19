
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import {Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [country, setCountry] = useState([]);

  const getCountries = async () => {
    try {
      let response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
      console.log(response.data);
      //Setting the response to be presented in the reverse order - using 'reverse()'- of the array because it naturally brings the countries from Z to A.
      setCountry(response.data.reverse());
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

      <div className="container">
         <div className="row">
           <div className="col vh-100 overflow-scroll">
            <CountriesList data={country} />
            </div>
            <div className="col">
            <Routes>
            <Route path='/:countryAlpha' element={<CountryDetails data={country} />} />
            </Routes>
            <CountryDetails data={country} />  
            </div>
           </div>
         </div>
        </div>
  );
 }


export default App; 
