import './App.css';
import  { Switch, Route } from 'react-router-dom';
import countries from './countries.json'
import CountriesList from './components/CountriesList/CountriesList';
import Navbar from './components/Navbar/Navbar';
import CountryDetails from './components/CountryDetails/CountryDetails';
import React from 'react';

class App extends React.Component{

  state = {
    countriesData: []
  }

   componentDidMount(){
     this.setState({
            ...this.state, 
            countriesData: countries
      })
    
   }

  render(){

      return (
        <div className="App">

      <Navbar></Navbar>
      <div className='container'>
        <div className='row'>
          <CountriesList/>
          <Switch>
              {/* <Route exact path="/" render={() => <CountriesList/>} /> */}
              <Route path="/:cca3" render={(props) => <CountryDetails {...props} />} />
            </Switch>
        </div>
      </div>


      </div>
    );
  }
}

export default App;
