import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'  //since routes created here
//import all components
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import {Navbar} from './components/Navbar'
import countries from './countries.json'

import React, {useState, useEffect} from 'react';




//define Routes here in root component App.js

function App() {

  
const [countryList, setCountries] = useState(countries)    


//COMPONENTUNMOUNT, -UPDATE, -DIDMOUNT DO NOOOOOOTTT WORK IN FUNC COMPONENTS!!!!
useEffect(async () => {
  let countries = await Axios.get('https://restcountries.eu/rest/v2/all')
  useState({
    countries: response.data.results
})
}, [])


  return (
    <>
       
        <Navbar/>  {/*not in route, common stuff */}
       
                <div style = {{diplay: 'flex'}}>     {/* warum 2 curly?*/}
                                                 
                 <CountriesList  countries = {countries}/>       {/*not in route, common stuff */}
                    <Switch>                               
                  <Route path={'/v2/:countryIndex'}  component={CountryDetails} />   
        
    


                   </Switch>
    
               </div>  {/*inside div: display everything flex*/ }
    </>   
   );


}

export default App;





