import React , {useEffect, useState} from 'react';
import './App.css';
import countries from './countries.json'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import 'bulma/css/bulma.css'
import {Route} from 'react-router-dom'
import axios from 'axios'



function App() {

// const [countries, setCountries] = useState([])
  
// let state = {
//   countries: countries,
// }

// const componentDidMount=()=>{
//   setState(state.countries)
// }


// useEffect(()=>{

//     axios.get('https://countries.tech-savvy.tech/countries')
//       .then((response)=>{
        
//           setCountries(response.data.results)
//       })
// }, [])



  return (
      <div>
        <Navbar/>
        <div className="columns">
          <div className="column" style={{overflow:"scroll", maxHeight:"90vh",}}>
              <CountriesList countries = {countries}/>
          </div>
          <div className="column">
            <Route path="/:countryId" component={CountryDetails} />
          </div>

        </div>
      </div>
   
  );
}

export default App;
