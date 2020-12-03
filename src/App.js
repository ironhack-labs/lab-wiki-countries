import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

class App extends Component() {
 
  state = {}
  
  render(){
    return (
      <div className="App">
       <Navbar />

       <div class="container">
        <div class="row">
          <CountriesList />
          <CountryDetails />
          
        
        </div>
      </div>

</div>
    );
  }

}

export default App;
