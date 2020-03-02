import React from 'react';

import './App.css';
import CountryDetail from './components/CountryDetail'
import countries from './countries.json'

function App() {
  return (
    <div className="App">
   {/* <CountryDetail name="infocountries" capital="capital" area="area"/> */} 
   <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action active">Wiki countries</a>
       
      </div>
    
   <div className="row">
   
        <div className="col-5">
            
            {countries.map(item => {
              return <div> {item.flag}  {item.name.common}</div>
            })}
        </div>
        <div className="col-7">

        <CountryDetail  name= {countries[0].name.common} capital ={countries[0].capital} area= {countries[0].area} />

        </div>
      </div>
      

      
    </div>
  );
}

export default App;
