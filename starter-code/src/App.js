import React from "react";
import "./App.css";
import countries from "./countries.json"

import CountryDetail from './CountryDetail';
import {Route, Link} from 'react-router-dom'
 
function App() {
  // let jsonData;
  // fetch(
  //   "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"
  // )
  //   .then(response => response.json())
  //   .then(jsonData => {
  //     // jsonData is parsed json object received from url
  //     console.log(jsonData);
  //   })
  //   .catch(error => {
  //     // handle your errors here
  //     console.error(error);
  //   });

console.log(countries)

  return (
    <div className="App">
      <nav class="navbar navbar-light bg-primary">
        <span class="text-light navbar-brand mb-0 h1">WikiCountries</span>
      </nav>
      <div class="row">
        <div class="col-5 ">
          <div class="list-group">
         {
           countries.map(data=>{
             return (
               <Link className="list-group-item list-group-item-action" to={`/${data.cca3}`}>
               {data.flag}{data.name.official}
</Link>
            
             )
           })
         }
            
          </div>
        </div>

        <div class="col-7"><Route exact path="/:id"  component={CountryDetail}/> </div>
      </div>
    </div>
  );
}

export default App;
