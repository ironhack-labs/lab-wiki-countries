import './App.css';
import Navbar from './components/Navbar'
//import CountriesJson from './countries.json'
import React, { Component } from 'react'
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetails'
import { Route } from 'react-router-dom'
import {Paper, Grid} from '@material-ui/core';




class App extends Component {

  

  render() {

     
    
    return (
      <div>
        <Navbar />

          <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper >
              <CountriesList />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper >
              <Route path={'/:countryCode'}  component={CountryDetail} />  
          </Paper>
        </Grid>
      </Grid>

        
      </div>
    )
  }
}

export default App;
