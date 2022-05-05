import './App.css';
import Navbar from './componets/Navbar';
import CountriesList from './componets/CountriesList';
import CountryDetails from './componets/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import countries from './countries.json'
import { useEffect, useState } from 'react'




function App() {
  const [countries, setCountries] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fecthApartments()
    }, [])                                                          

    const fecthApartments = () => {
        
            fetch('https://ih-countries-api.herokuapp.com/countries')
            .then((country) => {
                console.log(country)
                setCountries(country)
                setFetching(false)
            })
            .catch(err => console.log(err))
    }

  return (
    <div className="App">
      <Navbar/>
        <CountriesList/>
       <Routes>
        <Route path='/' element={  <CountriesList/>}/>
        <Route path='/:_Id' element={<CountryDetails countries={countries} /> }/>
        </Routes>
    </div>
  );
}

export default App;
