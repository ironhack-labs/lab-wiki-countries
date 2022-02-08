// src/App.js
import "./App.css";
import {Navbar} from './components'
import Router from './Routes';
import {CountriesList} from './components'
import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {

  const [countries, setCountries] = useState([])
    
  //solo una vez
  useEffect(()=>{
      axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(data => {
          setCountries(data.data)
      })
      .catch(err => {
          console.log(err)
      })
  },[])

  return (
    <div className="App">
      <div>
        <Navbar/>
        <div className="container">
          <div><CountriesList lista={countries}/></div>  
          <div><Router/></div>  
        </div>
      </div>
    </div>
  )
}
export default App;