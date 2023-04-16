import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import COUNTRIES_API from './countries.json';
import MyNavBar from './components/MyNavBar';
import CountiesList from './components/CountriesList';
import { Col, Container, Row } from 'react-bootstrap';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((res) => res.json())
      .then((list) => setCountries(list));
  }, []);

  return (
    <div className="App">
      <MyNavBar />
      <Container>
        <Row>
          <Col>
            <CountiesList countries={countries} />
          </Col>
          <Col>
            <Routes>
              <Route
                path="/:alpha3Code"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
