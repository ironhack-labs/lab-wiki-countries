import React, { Component } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import DataCountries from './countries.json';
import Routes from './Routes'

class  App extends Component{
  state = {
    listC: DataCountries
  }

   render() {
    const {listC} = this.state;

    return (
      <section>
        <div className="navbar navbar-dark bg-primary mb-3">
          <Navbar/>
        </div>

         <div className="container">
          <div className="row">
           <div className="col-5 extra">
            <div className="list-group">
            <CountriesList countries={listC}/>
          </div>
         </div>
         <Routes/>
        </div>
       </div>
     </section>
    );
   };
  };


export default App;