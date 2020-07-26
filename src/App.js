import React from 'react';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import { Route, Switch } from 'react-router-dom';
import CustomNavbar from './Components/NavBar';

function App() {

 
  return (
    <div className="appWrapper">
      
      <Container style={{border: "1px solid lightgrey", padding: "0px"}}>
      <CustomNavbar/>
      <Row>
        <CountriesList />
        <Col>
        <Switch>
          <Route exact path="/">
          <h3>Country Details</h3>
          </Route>
          <Route exact path="/:countryId" render={props => <CountryDetails {...props}> <h3>Country Details</h3> </CountryDetails>}/>
        </Switch>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
