import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import CountriesListPage from './pages/CountriesListPage/CountriesListPage';
import CountryDetailsPage from './pages/CountryDetailsPage/CountryDetailsPage';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AxiosCountries from './service/axios.service';
const axiosCountries = new AxiosCountries

function App() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    axiosCountries.getCountries()
      .then((newCountries) => {
        setCountries(newCountries)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <div className='container'>
        <div className="row">
          <CountriesListPage countries={countries} />
          <Routes >
            <Route path='/:code' element={<CountryDetailsPage countries={countries} axios={axiosCountries} />} />
          </Routes>
        </div>
      </div>
    </div>);




}

export default App;
