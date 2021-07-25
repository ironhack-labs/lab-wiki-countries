import React from 'react';
import './App.css';
import countries from './countries.json';
import CountryList from './components/CountryList.js';
import NavBar from './components/NavBar.js';
import CountryDetails  from './components/CountryDetails';
import { Route } from 'react-router-dom';



class App extends React.Component {

  state = {
    countriesList: countries
  }

  render() {
    return (
      <div className="App">
        <NavBar />
  
        <div className="flex">
          <CountryList countryArr={this.state.countriesList}/>

          <Route exact path= '/:id' component={CountryDetails}/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
