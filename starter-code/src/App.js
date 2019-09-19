import React, { Component } from 'react';
import './App.css';
import MainNavBar from "./MainNavBar";
import CountryDetails from "./CountryDetails";
import {Switch, Route} from 'react-router-dom';
import {NavLink,Link} from 'react-router-dom';
import countries from "./countries.json"



class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <MainNavBar/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-5" style ={{
              maxHeight : "90vh",
              overflow : "scroll"
            }}>
             <div className="list-group">
               {countries.map(country =>(
                 
                 
                 <NavLink to={"/" + country.cca3} className="list-group-item list-group-item-action ">
                 <img src={"https://www.countryflags.io/"+country.cca2.toLowerCase()+"/flat/64.png"} alt={country.name.official } style ={{
                   maxHeight : 20,
                   maxWidth:25,
                   textAlign : "left"
                 }}/>                   
                 {country.name.common}
                 </NavLink>

               ))}
               
               </div> 

            </div>
                 <div className="col-7">
                  <Route exact path ='/:cca3' component={CountryDetails}/>
                 </div>

        </div>
        </div>
      </div>
    );
  }
}

export default App;
