import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import CountriesDetails from './components/CountriesDetails';
import CountriesList from './components/CountriesList';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios'

class App extends Component {

  state = {
    countries: []

  }

  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      this.setState({countries: response.data})
    });
  }


  render(){
    return (
      <div className="App">
        <NavBar/>

        <div style={{display:"flex"}}>
        <CountriesList/>
        <Switch>
          <Route path="/countrydetail/:codigo" component={CountriesDetails}/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
