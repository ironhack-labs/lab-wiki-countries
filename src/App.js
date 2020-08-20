import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import countries from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  state = {
    countriesList: countries
  }

  componentDidMount(){
    axios.get('https://countries.tech-savvy.tech/countries')
      .then((res)=>{
        this.setState({
          countriesList: res.data
        })
      })
  }
  render(){
    return (
      <div>
        <NavBar/>
        <div style={{display:'flex', justifyContent: 'space-around'}}>
          <CountriesList countriesList = {this.state.countriesList}/>
        <Switch>
          <Route path='/country/:cca3' render= {(routerProps)=>{
              return <CountryDetails countriesList = {this.state.countriesList} {...routerProps}/>
          }}/>
        </Switch>
        </div>
      </div>
    );
  }
  
}

export default App;
