import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesDetails from "./components/CountriesDetails"
import CountriesList from './components/CountriesList';
import countries from './countries.json'
import {Route, Switch} from 'react-router-dom'

class App extends React.Component {
  state={
    countries: [],
  }

  componentDidMount(){
    this.setState({
      countries: countries
    });
  }


  render() {
    if(!this.state.countries){
      return 
        <h1>Loading...</h1>
    
    } else{
  return (
    <div className="App">
      
        <Navbar/>
        <CountriesList countries={this.state.countries}/>
        <Switch>
          <Route
          exact path="/:cca3"
          render={(routeProps)=>(
            <CountriesDetails {...routeProps} countries={this.state.countries}/>
          )}
            />
        </Switch>
    </div>
  );}
}

}

export default App;