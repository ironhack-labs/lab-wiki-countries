import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import Data from './countries.json';
import {Route} from 'react-router-dom'
import CountryDetails from './components/CountryDetails';



class App extends React.Component {

  state = {
    query: '',
    data: Data, 
  };  

  render (){
    return (
      <div className="App">
          <div>
            <Navbar
            />
            <div className="container">
              <div className="row">
                <div className="col-5">  
                  <CountriesList
                  data={this.state.data}
                  />
                  <Route exact path="/countryDetails/:id" 
                  render={(props)=> 
                    <CountryDetails {...props} 
                    countries={this.state.data} 
                    />} 
                  />
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
