import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import CountriesDetails from './components/CountryDetails/CountriesDetails';
import CountriesList from './components/CoutriesList/CountriesList';
import Navbar from './components/Navbar/Navbar';
 
import countriesJson from '.././src/countries.json';


function App() {

  const [ countries, setCountries] = useState([]);
  

  useEffect(()=>{
setCountries(...[countriesJson])
  },[]);

  return (
    <div>
    
      <BrowserRouter> 
        
          <Navbar/>
          
          <div className="container">
            
            <div className="row">
        
              <div className="col-5" > 

                <CountriesList countries = {countries} />
                
              </div>
              
              <div className="col-7">
              <Route 
              path="/:cca3"
              render={(routeProps)=>{
                return <CountriesDetails countries = {countries} {...routeProps} />
              }}>
                
              </Route>
              </div>
           
            </div>
          
          </div>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
