import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar/Navbar';
// import countriesData from './countries.json';

import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import { useState, useEffect } from 'react';

import axios from 'axios';

function App() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountriesData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App ">
      <Nav />
      <Container>
        <Row>
          <Col>
            <CountriesList countriesData={countriesData} />
          </Col>
          <Col>
            <Routes>
              <Route
                path="/:id"
                element={<CountryDetails countriesData={countriesData} />}
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
