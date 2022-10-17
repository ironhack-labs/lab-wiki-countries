import './App.css';
import CountriesList from './components/CountriesList';
import Nav from './components/Nav';
import { Container, Row, Col } from 'react-bootstrap';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [countriesArr, setCountriesArr] = useState([]);
  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((data) => data.json())
      .then((data) => {
        setCountriesArr(data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Nav />
      <Container>
        <Row>
          <Col>
            <CountriesList countries={countriesArr} />
          </Col>
          <Col>
            <Routes>
              <Route
                path=":alpha3Code"
                element={<CountryDetails />}
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
