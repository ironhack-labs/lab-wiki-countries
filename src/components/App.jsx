import './App.css'
import { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import CountriesList from './CountriesList/CountriesList';
import CountryDetails from './CountryDetails/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import Axios from 'axios';


function App() {

  const [Countries, setCountries] = useState([])

  useEffect(() => {
    Axios({
      url: "https://ih-countries-api.herokuapp.com/countries",
    })
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

  }, [setCountries])



  return (
    < div className="App" >
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <Navbar></Navbar>
      <CountriesList className='col' Countries={Countries}></CountriesList>
      <Routes>

        <Route path="/:country_alpha3Code" element={<CountryDetails Countries={Countries} />} />

      </Routes>


    </div >
  )


}

export default App;
