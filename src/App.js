import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Countrieslist from './components/Countrieslist';
import Countrydetails from './components/Countrydetails';
import Countrieselement from './components/Countrieselement';
import countriesList from './countries.json';

class App extends Component {
  state={
    countries: []
  } 

  componentDidMount(){
    this.setState({
      countries: countriesList
    })
  }

  render() {



  return (
    <div className="App">
      
      <Navbar/>
      <div className='d-flex  align-items-baseline'>
      <Countrieslist countries = {this.state.countries}/>
      
      <Switch>
        <Route  path="/:code" render={(props) => {return <Countrydetails {...props} countries = {this.state.countries}/>}}/>
      </Switch>

      </div>
      
        
    </div>
  );
}
}          

export default App;
