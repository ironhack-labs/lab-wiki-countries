import "./App.css";
import {NavBar} from './components/NavBar';
import { CountryList} from './components/CountryList';
import { Route, Routes } from 'react-router-dom'
import { CountryDetails } from "./components/CountryDetails";
import { useState, useEffect} from 'react'
import apiCountries from './utils/apiCountries'

function App() {

  const {countries, setCountries} = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const newCountries = await apiCountries.getAllCountries()
      setCountries(newCountries)
    }
    fetchData()
  }, [])



  return (
    <>
     <NavBar/>
     <div className='container'>
       <div className='row'>
         <div className='col-5' style={{maxHeight: '90vh', overflow: 'scroll'}}>
           <div className='list-group'>
             <CountryList countries={countreis}/>
           </div>
          </div>
          <Routes>
            <Route path='/:id' element = {<CountryDetails countreis={countreis}/>} />
          </Routes>
       </div>
     </div>
    </>
    );
  }

  
export default App;

