import { Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryItem from './components/CountryItem';
import Navbar from './components/Navbar/Navbar';
import {countriesList}  from './services/CountriesService';

function App() {

  const [list, setList] = useState([]);

  useEffect(() => { 
    countriesList()
    .then((response)=> setList(response))

  }, []);

  console.log(list)

  return (
    <div className="App">
     <Navbar />
     <Routes >
      <Route path="/" element={ <CountriesList list={list}/>} />
      <Route path='/:id' element={<CountryItem />} />
       
     </Routes>
    </div>
  );
}

export default App;
