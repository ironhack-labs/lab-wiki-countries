import './App.css';
import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import { Switch, Route} from 'react-router-dom'



function App() {

  return (
  
    <>
    <Navbar expand="lg" variant="dark" bg="dark">
    <Container>
      <Navbar.Brand href="/">WikiCountries</Navbar.Brand>
    </Container>
  </Navbar>

  <CountriesList />
 
  <Switch>
  <Route path="/:cca3" render={() => <CountryDetails />} />
  </Switch>


  </>

  );
}

export default App;
